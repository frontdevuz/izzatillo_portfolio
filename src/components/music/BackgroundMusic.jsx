import React, { useEffect, useRef } from "react";
import { MusicPlayer } from "./BackgroundMusicLS";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = true; 
      audio.play().catch(() => {
        console.log
      });
    }

    const enableSound = () => {
      if (audio && audio.muted) {
        audio.muted = false;
        audio.play();
      }
      document.removeEventListener("click", enableSound);
    };

    document.addEventListener("click", enableSound);
    return () => document.removeEventListener("click", enableSound);
  }, []);

  return (
    <MusicPlayer
      ref={audioRef}
      autoPlay
      loop
      style={{ display: "none" }}
      preload="none"
      controls="false"
    >
      <source src="/space_audio.mp3" type="audio/mp3" />
    </MusicPlayer>
  );
}
