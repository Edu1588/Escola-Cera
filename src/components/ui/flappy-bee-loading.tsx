"use client";

import React, { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

export function FlappyBeeLoading({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000;
    const interval = 40; // update every 40ms
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      const p = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(p);
      if (elapsed >= duration) {
        clearInterval(timer);
      }
    }, interval);

    const finishTimeout = setTimeout(() => {
      onFinish();
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#FBF9F6] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500">
      {/* Ground */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-black z-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
          backgroundSize: "28px 28px",
          animation: "slide-bg 0.5s linear infinite",
        }}
      />

      {/* Bee */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 animate-[bounce-ys_0.8s_ease-in-out_infinite] z-30">
        <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-lg" aria-hidden="true">
          <path
            d="M6 14 C18 6, 26 6, 30 14"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            strokeLinecap="round"
            opacity="0.5"
          />
          <ellipse cx="40" cy="34" rx="16" ry="12" fill="black" />
          <path
            d="M34 24 L34 44 M42 22 L42 46 M50 26 L50 42"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="56" cy="34" r="4" fill="white" />
          <circle cx="57" cy="34" r="2" fill="black" />
          <ellipse
            cx="42"
            cy="18"
            rx="8"
            ry="10"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            transform="rotate(30 42 18)"
          />
          <ellipse
            cx="28"
            cy="22"
            rx="6"
            ry="8"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            transform="rotate(-20 28 22)"
          />
        </svg>
      </div>

      <div className="absolute bottom-28 flex flex-col items-center gap-2 z-30">
        <div className="font-display text-2xl md:text-3xl font-bold text-black animate-pulse">
          Carregando a diversão . . .
        </div>
        <div
          className="font-display text-4xl font-bold text-black"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {progress}%
        </div>
      </div>

      <style>{`
        @keyframes slide-left {
          from { transform: translateX(500px); }
          to { transform: translateX(-150px); }
        }
        @keyframes bounce-ys {
          0%, 100% { transform: translateY(-40px) rotate(-15deg); }
          50% { transform: translateY(20px) rotate(20deg); }
        }
        @keyframes slide-bg {
          from { background-position: 0 0; }
          to { background-position: -28px 0; }
        }
      `}</style>
    </div>
  );
}
