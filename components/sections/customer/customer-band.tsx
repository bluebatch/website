"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
  scale?: string;
}

interface CustomerBandProps {
  logos: Logo[];
}

const PIXELS_PER_SECOND = 50;

export default function CustomerBand({ logos }: CustomerBandProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const [ready, setReady] = useState(false);

  // Drag state
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);
  const velocityRef = useRef(0);

  const measure = useCallback(() => {
    if (!stripRef.current) return;
    halfWidthRef.current = stripRef.current.scrollWidth / 2;
    setReady(true);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Animation loop
  useEffect(() => {
    if (!ready) return;
    let prev: number | null = null;
    let rafId: number;

    const tick = (now: number) => {
      if (prev === null) prev = now;
      const dt = (now - prev) / 1000;
      prev = now;

      if (!dragging.current) {
        // Apply velocity decay when releasing drag
        if (Math.abs(velocityRef.current) > 1) {
          offsetRef.current -= velocityRef.current * dt;
          velocityRef.current *= 0.95; // friction
        } else {
          velocityRef.current = 0;
          offsetRef.current += PIXELS_PER_SECOND * dt;
        }
      }

      // Wrap offset
      const hw = halfWidthRef.current;
      if (hw > 0) {
        offsetRef.current = ((offsetRef.current % hw) + hw) % hw;
      }

      if (stripRef.current) {
        stripRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [ready]);

  // Drag handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    lastDragX.current = e.clientX;
    lastDragTime.current = performance.now();
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const now = performance.now();
    const dx = e.clientX - lastDragX.current;
    const dt = (now - lastDragTime.current) / 1000;

    if (dt > 0) {
      velocityRef.current = dx / dt;
    }

    lastDragX.current = e.clientX;
    lastDragTime.current = now;

    const totalDx = e.clientX - dragStartX.current;
    offsetRef.current = dragStartOffset.current - totalDx;
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const renderLogos = (keyPrefix: string) =>
    logos.map((logo, i) => (
      <div
        key={`${keyPrefix}-${i}`}
        className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={120}
          height={60}
          className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 pointer-events-none"
          draggable={false}
          onLoad={measure}
        />
      </div>
    ));

  return (
    <section className="bg-white py-12">
      <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">
        Vertraut von führenden Unternehmen
      </p>

      <div
        className="overflow-hidden py-6 cursor-grab active:cursor-grabbing select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={stripRef}
          className={`flex items-center will-change-transform transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex items-center flex-shrink-0">
            {renderLogos("a")}
          </div>
          <div className="flex items-center flex-shrink-0">
            {renderLogos("b")}
          </div>
        </div>
      </div>
    </section>
  );
}
