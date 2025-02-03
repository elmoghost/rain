import confetti from "canvas-confetti";

// Definir el tipo para las opciones de confetti
type ConfettiOptions = {
  spread: number;
  startVelocity: number;
  decay?: number;
  scalar?: number;
  particleCount?: number;
  angle?: number;
  gravity?: number;
  ticks?: number;
  origin?: { x?: number; y?: number };
};

export function launchConfetti() {
  const count = 150;
  const defaults = {
    origin: { y: 1 },
    gravity: 1,
    ticks: 400,
  };

  function fire(particleRatio: number, opts: ConfettiOptions) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  const launchAnimation = () => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    setTimeout(() => {
      fire(0.2, {
        spread: 60,
        startVelocity: 45,
      });
    }, 200);

    setTimeout(() => {
      fire(0.35, {
        spread: 100,
        decay: 0.95,
        scalar: 0.8,
        startVelocity: 50,
      });
    }, 400);

    setTimeout(() => {
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        decay: 0.96,
        scalar: 1.2,
      });
    }, 600);

    setTimeout(() => {
      fire(0.1, {
        spread: 120,
        startVelocity: 50,
      });
    }, 800);
  };

  // Llamar a la animación por primera vez
  launchAnimation();

  // Repetir la animación cada 6 segundos
  setInterval(launchAnimation, 6000);
}
