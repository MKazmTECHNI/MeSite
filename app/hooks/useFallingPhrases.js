"use client";

import { useEffect, useRef } from "react";

const PHRASES = [
  "Ado",
  "js sucks",
  "please no",
  "why tho",
  "help me",
  "plens go brr",
  "technigram",
  "typescript = type shit",
  "underage coding",
  "under construction",
  "undertale :DDD", // yes I like undertale sue me
  // i must do underatle easter egg somewhere
  "I use arch btw",
];

const CONFIG = {
  PHRASE_FONT_MIN: 16,
  PHRASE_FONT_MAX: 24,
  PHRASE_SPEED_MAX: 1.5,
  PHRASE_SPIN_MIN: 0.5,
  PHRASE_SPIN_MAX: 1.5,
  PHRASE_DROP_MIN: 500,
  PHRASE_DROP_MAX: 2000,
  PHRASE_START_Y: -40,
  PHRASE_REMOVE_OFFSET: 40,
};

export function useFallingPhrases(containerRef) {
  const timeoutRef = useRef(null);

  function randomBetween(a, b) {
    return Math.random() * (b - a) + a;
  }

  function createFallingPhrase(text) {
    if (!containerRef.current) return;

    const phrase = document.createElement("div");
    phrase.textContent = text;
    phrase.className = "falling-phrase"; // We'll use global class since it's dynamic
    phrase.style.fontSize = `${randomBetween(
      CONFIG.PHRASE_FONT_MIN,
      CONFIG.PHRASE_FONT_MAX - text.length / 2
    )}px`;

    // Apply styles directly since we can't use CSS modules for dynamic elements
    Object.assign(phrase.style, {
      position: "absolute",
      fontFamily: "monospace",
      color: "#dcdcdcff",
      pointerEvents: "none",
      willChange: "transform, top",
      userSelect: "none",
      zIndex: "1",
      left: "0",
      top: "-40px",
      transform: "rotate(0deg)",
      whiteSpace: "nowrap",
    });

    containerRef.current.appendChild(phrase);

    // Set random left position so phrase stays within viewport
    phrase.style.left = `${randomBetween(0, window.innerWidth - 120)}px`;
    let y = CONFIG.PHRASE_START_Y;
    let rotation = 0;
    const speed = randomBetween(text.length / 10, CONFIG.PHRASE_SPEED_MAX);
    const spinSpeed = randomBetween(
      CONFIG.PHRASE_SPIN_MIN,
      CONFIG.PHRASE_SPIN_MAX
    );

    function animate() {
      y += speed;
      rotation += spinSpeed;
      phrase.style.top = `${y}px`;
      phrase.style.transform = `rotate(${rotation}deg)`;

      if (y < window.innerHeight + CONFIG.PHRASE_REMOVE_OFFSET) {
        requestAnimationFrame(animate);
      } else {
        phrase.remove();
      }
    }
    animate();
  }

  function dropPhraseLoop() {
    const text = PHRASES[Math.floor(Math.random() * PHRASES.length)];
    createFallingPhrase(text);
    const delay = randomBetween(CONFIG.PHRASE_DROP_MIN, CONFIG.PHRASE_DROP_MAX);
    timeoutRef.current = setTimeout(dropPhraseLoop, delay);
  }

  useEffect(() => {
    dropPhraseLoop();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Clean up any remaining phrases
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return null; // This hook doesn't return JSX
}
