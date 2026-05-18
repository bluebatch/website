"use client";

import { useEffect, useRef, useState } from "react";

export type ChatTurn = { from: "user" | "bot"; text: string };

interface Props {
  turns: ChatTurn[];
  /** Optional index to stagger animation starts across multiple cards on one page. */
  index?: number;
}

const USER_TYPE_SPEED = 28; // ms per char
const BOT_TYPE_SPEED = 14;
const BOT_THINK_DURATION = 900;
const PAUSE_AFTER_TURN = 700;
const LOOP_DELAY = 4500;

export default function ChatConversation({ turns, index = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visibleTurns, setVisibleTurns] = useState<ChatTurn[]>([]);
  const [thinking, setThinking] = useState(false);
  const [typingTurnIdx, setTypingTurnIdx] = useState<number | null>(null);

  // Start when scrolled into view
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Drive the animation
  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((res) => {
        const t = setTimeout(res, ms);
        if (cancelled) clearTimeout(t);
      });

    async function run() {
      // initial stagger across cards
      await sleep(index * 250);

      while (!cancelled) {
        setVisibleTurns([]);
        setThinking(false);
        setTypingTurnIdx(null);
        await sleep(400);

        for (let i = 0; i < turns.length; i++) {
          if (cancelled) return;
          const turn = turns[i];

          if (turn.from === "bot") {
            setThinking(true);
            await sleep(BOT_THINK_DURATION);
            if (cancelled) return;
            setThinking(false);
          }

          // Append an empty turn entry and type into it
          setVisibleTurns((prev) => [...prev, { from: turn.from, text: "" }]);
          setTypingTurnIdx(i);
          const speed = turn.from === "user" ? USER_TYPE_SPEED : BOT_TYPE_SPEED;
          for (let c = 1; c <= turn.text.length; c++) {
            if (cancelled) return;
            setVisibleTurns((prev) => {
              const next = [...prev];
              next[i] = { from: turn.from, text: turn.text.slice(0, c) };
              return next;
            });
            await sleep(speed);
          }
          setTypingTurnIdx(null);

          await sleep(PAUSE_AFTER_TURN);
        }

        await sleep(LOOP_DELAY);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [inView, turns, index]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-gray-200 bg-gray-50/60 p-3 flex flex-col gap-2.5 h-[220px] lg:h-full lg:min-h-[220px] overflow-hidden"
    >
      {visibleTurns.map((turn, i) =>
        turn.from === "user" ? (
          <UserBubble
            key={i}
            text={turn.text}
            typing={typingTurnIdx === i}
          />
        ) : (
          <BotBubble
            key={i}
            text={turn.text}
            typing={typingTurnIdx === i}
          />
        ),
      )}
      {thinking && <ThinkingBubble />}
    </div>
  );
}

function UserBubble({ text, typing }: { text: string; typing: boolean }) {
  return (
    <div className="flex items-end justify-end gap-2 chat-bubble-in">
      <div className="rounded-2xl rounded-br-md bg-primary-700 px-3 py-2 text-sm text-white max-w-[85%] leading-snug whitespace-pre-wrap">
        {text}
        {typing && <Caret />}
      </div>
      <div
        className="w-7 h-7 shrink-0 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 20.25a7.5 7.5 0 0 1 15 0v.75H4.5v-.75z"
          />
        </svg>
      </div>
    </div>
  );
}

function BotBubble({ text, typing }: { text: string; typing: boolean }) {
  return (
    <div className="flex items-end gap-2 chat-bubble-in">
      <div
        className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-secondary-300 to-primary-200 text-primary-900 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.091zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.898 20.567 16.5 21.75l-.398-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.179-.398a2.25 2.25 0 0 0 1.423-1.423l.398-1.179.398 1.179a2.25 2.25 0 0 0 1.423 1.423l1.183.398-1.183.398a2.25 2.25 0 0 0-1.423 1.423z"
          />
        </svg>
      </div>
      <div className="rounded-2xl rounded-bl-md bg-white border border-gray-200 px-3 py-2 text-sm text-gray-800 max-w-[85%] leading-snug whitespace-pre-wrap shadow-sm">
        {text}
        {typing && <Caret />}
      </div>
    </div>
  );
}

function ThinkingBubble() {
  return (
    <div className="flex items-end gap-2 chat-bubble-in">
      <div
        className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-secondary-300 to-primary-200 text-primary-900 flex items-center justify-center"
        aria-hidden="true"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.091z"
          />
        </svg>
      </div>
      <div className="rounded-2xl rounded-bl-md bg-white border border-gray-200 px-3 py-2.5 text-gray-500 shadow-sm">
        <span className="flex gap-1">
          <span className="chat-typing-dot" />
          <span className="chat-typing-dot" style={{ animationDelay: "0.2s" }} />
          <span className="chat-typing-dot" style={{ animationDelay: "0.4s" }} />
        </span>
      </div>
    </div>
  );
}

function Caret() {
  return (
    <span
      className="inline-block w-[1px] h-3.5 ml-0.5 align-[-2px] bg-current animate-pulse"
      aria-hidden="true"
    />
  );
}
