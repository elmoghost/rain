import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { shootCash } from "../animation";

export function SimulatedRaceButton() {
  const [commits, setCommits] = useState<{ id: string; wonRace: boolean }[]>(
    []
  );
  const [running, setRunning] = useState(false);

  const generateCommit = () => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      wonRace: Math.random() > 0.5,
    };
  };

  const startSimulation = async () => {
    if (running) return;
    setRunning(true);
    setCommits([]);

    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const newCommit = generateCommit();
      setCommits((prev) => [...prev, newCommit]);
    }

    setRunning(false);
  };

  useEffect(() => {
    const lastRaceWon = commits[commits.length - 1]?.wonRace;
    if (lastRaceWon === true) {
      shootCash();
    }
  }, [commits]);

  //   // This is the original code that was refactored
  //   const lastRaceWon = commits[commits.length - 1]?.wonRace;
  //   useEffect(() => {
  //     if (lastRaceWon === true) {
  //       shootCash();
  //     }
  //   }, [lastRaceWon]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={startSimulation} disabled={running}>
        {running ? "Simulando..." : "Iniciar Simulación"}
      </Button>
      <div className="grid gap-2">
        {commits.map((commit) => (
          <div
            key={commit.id}
            className={`p-2 rounded-lg ${
              commit.wonRace ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {commit.wonRace ? "Ganado" : "Perdido"}
          </div>
        ))}
      </div>
    </div>
  );
}
