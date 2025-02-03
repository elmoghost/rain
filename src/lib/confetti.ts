import confetti from "canvas-confetti";

type ConfettiOptions = confetti.Options & {
  shapes?: (confetti.Shape | string)[];
};

export function launchConfetti() {
  const scalar = 2;

  // Agregar varios emojis
  const emojis = ["💰", "💸", "✨🐹", "🏆"].map((emoji) =>
    confetti.shapeFromText({ text: emoji, scalar })
  );

  const defaults: ConfettiOptions = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: emojis, // Usamos el array de emojis
    scalar,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
    });

    confetti({
      ...defaults,
      particleCount: 5,
      flat: true,
    });

    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ["circle"],
    });
  }

  const launchAnimation = () => {
    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  launchAnimation();
  const intervalId = setInterval(launchAnimation, 1500);

  return intervalId;
}
// import confetti from "canvas-confetti";

// type ConfettiOptions = confetti.Options & {
//   shapes?: (confetti.Shape | string)[];
// };

// // Definir las formas desde rutas SVG
// const coin = confetti.shapeFromPath({
//   path: "M50 0a50 50 0 1 1-50 50A50 50 0 0 1 50 0z", // Círculo como moneda
//   matrix: [0.2, 0, 0, 0.2, -5, -5],
// });

// const coin1 = confetti.shapeFromPath({
//   path: "M50 0a50 50 0 1 1-50 50A50 50 0 0 1 50 0z", // Misma forma, diferente color
//   matrix: [0.2, 0, 0, 0.2, -5, -5],
// });

// const coin2 = confetti.shapeFromPath({
//   path: "M50 0a50 50 0 1 1-50 50A50 50 0 0 1 50 0z", // Misma forma, diferente color
//   matrix: [0.2, 0, 0, 0.2, -5, -5],
// });

// export function launchConfetti() {
//   const scalar = 2;

//   const defaults: ConfettiOptions = {
//     scalar,
//     spread: 180,
//     particleCount: 30,
//     origin: { y: -0.1 },
//     startVelocity: -35,
//   };

//   function shoot() {
//     confetti({
//       ...defaults,
//       shapes: [coin],
//       colors: ["#ffd700"], // Oro
//     });

//     confetti({
//       ...defaults,
//       shapes: [coin1],
//       colors: ["#c0c0c0"], // Plata
//     });

//     confetti({
//       ...defaults,
//       shapes: [coin2],
//       colors: ["#cd7f32"], // Bronce
//     });
//   }

//   const launchAnimation = () => {
//     shoot();
//     setTimeout(shoot, 200);
//     setTimeout(shoot, 400);
//   };

//   launchAnimation();
//   const intervalId = setInterval(launchAnimation, 3000);

//   return intervalId;
// }
