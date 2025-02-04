"use client";

import { useRef, useState, useEffect } from "react";
import { shootCash } from "./animation";
import { Progress } from "@/components/ui/progress";

function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProgress(targetProgress);
    }, 100);

    return () => clearTimeout(timer);
  }, [targetProgress]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [targetProgress]);

  const handleSubmit = () => {
    shootCash();
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e: DOMException) => console.error("audio play failed:", e));
    }
    setTargetProgress((prev) => Math.min(prev + 3, 100));
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen max-w-xl mx-auto">
      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          className="rounded-xl border py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Dale aqui (+3 XP)
        </button>
      </div>

      <audio ref={audioRef} src="/public_cashsound.mp3" />
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">XP Progress</span>
          <span className="text-sm font-medium">
            {currentProgress} / 100 XP
          </span>
        </div>
        <Progress
          value={currentProgress}
          className="transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}

export default HomePage;
