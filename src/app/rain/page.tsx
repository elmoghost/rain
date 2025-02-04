"use client";

import { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

function HomePage() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev >= 60) {
          clearInterval(interval);
          return 60;
        }

        const newTime = prev + 1;
        if (newTime % 5 === 0) {
          shootCash();
          if (audioRef.current) {
            audioRef.current
              .play()
              .catch((e: DOMException) =>
                console.error("Audio play failed:", e)
              );
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const shootCash = () => {
    const scalar = 4;
    const cash = confetti.shapeFromText({ text: "💸", scalar });
    const hamster = confetti.shapeFromText({ text: "🐹", scalar });
    const trofeo = confetti.shapeFromText({ text: "🏆", scalar });
    const money = confetti.shapeFromText({ text: "💰", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      scalar,
      shapes: [cash, hamster, trofeo, money],
      particleCount: 30,
    };

    confetti(defaults);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div>
        {!running ? (
          <button
            onClick={() => setRunning(true)}
            className="rounded-xl border py-2 px-4 "
          >
            Start
          </button>
        ) : (
          <p>Tiempo: {time}s</p>
        )}
      </div>
      <audio ref={audioRef} src="/public_cashsound.mp3" />
      <div>
        <Link href={"/"} className="border rounded-xl px-4 py-2">
          Dandole al boton
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
