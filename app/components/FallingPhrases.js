"use client";

import { useRef } from "react";
import { useFallingPhrases } from "../hooks/useFallingPhrases";
import styles from "../page.module.css";

export function FallingPhrases() {
  const containerRef = useRef(null);
  useFallingPhrases(containerRef);

  return (
    <div ref={containerRef} className={styles.fallingPhraseContainer}></div>
  );
}
