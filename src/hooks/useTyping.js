import { useState, useEffect } from "react";

/**
 * Custom hook to create a typing effect.
 * @param {string[]} texts - Array of texts to type one by one.
 * @param {number} speed - Typing speed (ms per character).
 * @param {number} pause - Pause duration before deleting (ms).
 * @returns {string} The current typed text.
 */
const useTyping = (texts, speed = 100, pause = 1000) => {
  const [index, setIndex] = useState(0);       // Current string index
  const [subIndex, setSubIndex] = useState(0); // Current character index
  const [forward, setForward] = useState(true); // Typing or deleting mode
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (index >= texts.length) setIndex(0); // Loop back to the first string

    const timeout = setTimeout(() => {
      setDisplayedText(texts[index].substring(0, subIndex));

      if (forward) {
        // Typing characters
        if (subIndex < texts[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          // Pause then start deleting
          setForward(false);
        }
      } else {
        // Deleting characters
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          // Move to the next string
          setForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, texts, speed]);

  return displayedText;
};

export default useTyping;
