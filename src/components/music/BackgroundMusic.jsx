import React, { useEffect, useRef } from "react";
import { MusicPlayer } from "./BackgroundMusicLS";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playMusic = () => {
      if (audio.paused) {
        audio.muted = false;
        audio.play().catch((err) => console.log("Audio play error:", err));
      }
      removeListeners();
    };

    const removeListeners = () => {
      document.removeEventListener("click", playMusic);
      document.removeEventListener("scroll", playMusic);
    };

    document.addEventListener("click", playMusic, { once: true });
    document.addEventListener("scroll", playMusic, { once: true });

    return removeListeners;
  }, []);

  return (
    <MusicPlayer
      ref={audioRef}
      preload="auto"
      loop
      style={{ display: "none" }}
    >
      <source src="/space_audio.mp3" type="audio/mp3" />
    </MusicPlayer>
  );
}
