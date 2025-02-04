"use client";

import { useRef } from "react";
import confetti from "canvas-confetti";

function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const shootCash = () => {
    const scalar = 4;
    // Usamos solo los emojis como formas
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
      shapes: [cash, hamster, trofeo, money], // Solo los emojis
      particleCount: 30,
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 30,
        origin: { x: Math.random(), y: 0 }, // Aleatorio en X, siempre desde arriba
        gravity: 1, // Caída hacia abajo
        startVelocity: 10, // Velocidad inicial más baja
        ticks: 100, // Duración mayor
      });

      confetti({
        ...defaults,
        particleCount: 5,
        flat: true,
        origin: { x: Math.random(), y: 0 }, // Aleatorio en X
        gravity: 1,
        startVelocity: 10,
        ticks: 100,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        origin: { x: Math.random(), y: 0 },
        gravity: 1,
        startVelocity: 10,
        ticks: 100,
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  const handleSubmit = () => {
    shootCash();
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e: DOMException) => console.error("audio play failed:", e));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={() => handleSubmit()}
        className="rounded-xl border py-2 px-4"
      >
        Dale aqui
      </button>

      <audio ref={audioRef} src="/public_cashsound.mp3" />
    </div>
  );
}

export default HomePage;
