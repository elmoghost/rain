import confetti from "canvas-confetti";

type ConfettiOptions = confetti.Options & {
  shapes?: (confetti.Shape | string)[];
};

export function launchConfetti() {
  const count = 200;
  const scalar = 2;

  const emojis = ["💰", "💸", "✨🐹", "🏆"].map((emoji) =>
    confetti.shapeFromText({ text: emoji, scalar })
  );

  const defaults: ConfettiOptions = {
    origin: { y: -0.1 }, // Ajuste para que empiece más arriba
    angle: 270, // Confeti caído hacia abajo
  };

  function fire(particleRatio: number, opts: object) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      shapes: emojis,
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 35, // Menor velocidad para hacerlo más lento
    decay: 0.95, // Menor decaimiento para que dure más
  });

  fire(0.2, {
    spread: 60,
    startVelocity: 30, // Menor velocidad para hacerlo más lento
    decay: 0.95,
  });

  fire(0.35, {
    spread: 100,
    startVelocity: 10, // Menor velocidad para hacerlo más lento
    decay: 0.99, // Decaimiento más suave
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 5, // Menor velocidad para hacerlo más lento
    decay: 0.98, // Decaimiento más suave
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 5, // Menor velocidad para hacerlo más lento
    decay: 0.98,
  });
}

setInterval(launchConfetti, 3000);
