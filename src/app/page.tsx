"use client";

import { useRef } from "react";
import { shootCash } from "./animation";
// import Link from "next/link";

function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSubmit = () => {
    shootCash();
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((e: DOMException) => console.error("audio play failed:", e));
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div>
        <button
          onClick={() => handleSubmit()}
          className="rounded-xl border py-2 px-4"
        >
          Dale aqui
        </button>
      </div>

      <audio ref={audioRef} src="/public_cashsound.mp3" />
      {/* <div>
        <Link href={"/rain"} className="border rounded-xl px-4 py-2">
          Sin Parar
        </Link>
      </div> */}
    </div>
  );
}

export default HomePage;
