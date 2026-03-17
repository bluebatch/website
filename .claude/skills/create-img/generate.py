#!/usr/bin/env python3
"""
Gemini Image Generator for Bluebatch website.
Uses Google Gemini API (Imagen 4) to generate images from prompts.

The prompt is sent directly to the API without modification.
All style direction must be baked into the prompt itself.

Usage:
  python3 generate.py --prompt "..." --output /path/to/output.png
  python3 generate.py --prompt "..." --output /path/to/output.png --aspect 16:9
"""

import argparse
import base64
import json
import os
import sys
import urllib.request
import urllib.error


API_URL = "https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict"


def generate_image(prompt: str, aspect_ratio: str = "16:9") -> bytes:
    api_key = os.environ.get("GOOGLE_GEMINI_API_KEY")
    if not api_key:
        print("Error: GOOGLE_GEMINI_API_KEY environment variable not set.", file=sys.stderr)
        sys.exit(1)

    # Append a short instruction to suppress text rendering by Imagen
    full_prompt = prompt.rstrip(". ") + ". The image contains no words, letters, numbers, or written text of any kind."

    payload = {
        "instances": [{"prompt": full_prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": aspect_ratio,
            "safetyFilterLevel": "BLOCK_ONLY_HIGH",
        },
    }

    url = f"{API_URL}?key={api_key}"
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"API Error {e.code}: {body}", file=sys.stderr)
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"Connection Error: {e.reason}", file=sys.stderr)
        sys.exit(1)

    predictions = result.get("predictions", [])
    if not predictions:
        print("Error: No predictions returned from API.", file=sys.stderr)
        print(f"Response: {json.dumps(result, indent=2)}", file=sys.stderr)
        sys.exit(1)

    b64_data = predictions[0].get("bytesBase64Encoded")
    if not b64_data:
        print("Error: No image data in response.", file=sys.stderr)
        sys.exit(1)

    return base64.b64decode(b64_data)


def main():
    parser = argparse.ArgumentParser(description="Generate images using Gemini Imagen 4")
    parser.add_argument("--prompt", type=str, required=True, help="Complete image generation prompt (style included)")
    parser.add_argument("--output", type=str, required=True, help="Output file path (PNG)")
    parser.add_argument("--aspect", type=str, default="16:9", help="Aspect ratio (e.g., 16:9, 1:1, 4:3)")

    args = parser.parse_args()

    print(f"Generating image...")
    print(f"Prompt: {args.prompt[:120]}...")

    image_data = generate_image(args.prompt, args.aspect)

    os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)

    with open(args.output, "wb") as f:
        f.write(image_data)

    size_kb = len(image_data) / 1024
    print(f"Saved: {args.output} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
