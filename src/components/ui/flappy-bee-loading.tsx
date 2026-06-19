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
      {/* Bee Video */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] z-30">
        <video
          src="https://res.cloudinary.com/djw0tqmiw/video/upload/v1781880344/mjhgra1aio2tutlw4cis.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain mix-blend-multiply"
        />
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
      `}</style>
    </div>
  );
}
