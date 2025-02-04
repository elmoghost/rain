"use client";

import confetti from "canvas-confetti";

export function shootCash() {
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

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      origin: { x: Math.random(), y: 0 },
      gravity: 1,
      startVelocity: 10,
      ticks: 100,
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}
