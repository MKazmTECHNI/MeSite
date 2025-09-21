"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const DISCORD_USER_ID = "700420330715480166";

  // Falling phrases configuration
  const PHRASES = [
    "Ado",
    "js sucks",
    "please no",
    "why tho",
    "help me",
    "plens go brr",
    "technigram",
    "typescript = type shit",
  ];
  const PHRASE_FONT_MIN = 16;
  const PHRASE_FONT_MAX = 24;
  const PHRASE_SPEED_MAX = 1.5;
  const PHRASE_SPIN_MIN = 0.5;
  const PHRASE_SPIN_MAX = 1.5;
  const PHRASE_DROP_MIN = 500;
  const PHRASE_DROP_MAX = 2000;
  const PHRASE_START_Y = -40;
  const PHRASE_REMOVE_OFFSET = 40;

  function FallingPhrases() {
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);

    function randomBetween(a, b) {
      return Math.random() * (b - a) + a;
    }

    function createFallingPhrase(text) {
      if (!containerRef.current) return;

      const phrase = document.createElement("div");
      phrase.textContent = text;
      phrase.className = styles.fallingPhrase;
      phrase.style.fontSize = `${randomBetween(
        PHRASE_FONT_MIN,
        PHRASE_FONT_MAX - text.length / 2
      )}px`;
      containerRef.current.appendChild(phrase);

      // Set random left position so phrase stays within viewport
      phrase.style.left = `${randomBetween(0, window.innerWidth - 120)}px`;
      let y = PHRASE_START_Y;
      let rotation = 0;
      const speed = randomBetween(text.length / 10, PHRASE_SPEED_MAX);
      const spinSpeed = randomBetween(PHRASE_SPIN_MIN, PHRASE_SPIN_MAX);

      function animate() {
        y += speed;
        rotation += spinSpeed;
        phrase.style.top = `${y}px`;
        phrase.style.transform = `rotate(${rotation}deg)`;

        if (y < window.innerHeight + PHRASE_REMOVE_OFFSET) {
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
      const delay = randomBetween(PHRASE_DROP_MIN, PHRASE_DROP_MAX);
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

    return (
      <div ref={containerRef} className={styles.fallingPhraseContainer}></div>
    );
  }

  function SpotifyStatus() {
    const [spotifyData, setSpotifyData] = useState(null);
    const [currentTime, setCurrentTime] = useState(Date.now());
    const LANYARD_FETCH_INTERVAL = 3 * 1000; // 3 seconds

    function msToTime(ms) {
      const totalSec = Math.floor(ms / 1000);
      const min = Math.floor(totalSec / 60);
      const sec = totalSec % 60;
      return `${min}:${sec.toString().padStart(2, "0")}`;
    }

    async function fetchLanyard() {
      try {
        const res = await fetch(
          `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`
        );
        const data = await res.json();
        setSpotifyData(data?.data?.spotify);
      } catch (e) {
        console.error("Error fetching status:", e);
      }
    }

    // Fetch Lanyard data every 3 seconds
    useEffect(() => {
      fetchLanyard();
      const interval = setInterval(fetchLanyard, LANYARD_FETCH_INTERVAL);
      return () => clearInterval(interval);
    }, []);

    // Update current time every second for progress tracking
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(Date.now());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    if (!spotifyData) {
      return null; // Don't show anything if not listening to Spotify
    }

    const start = spotifyData.timestamps.start;
    const end = spotifyData.timestamps.end;
    const durationMs = end - start;
    const elapsedMs = Math.max(0, currentTime - start);
    const elapsed = msToTime(elapsedMs);
    const total = msToTime(durationMs);

    return (
      <div className={styles.nowPlaying}>
        <div className={styles.spotifyStatus}>
          <Image
            width={32}
            height={32}
            src={spotifyData.album_art_url}
            alt="Album Art"
            className={styles.spotifyAlbumArt}
          />
          <strong className={styles.spotifySong}>{spotifyData.song}</strong>
          <span className={styles.spotifyArtist}>{spotifyData.artist}</span>
          <span className={styles.spotifyProgress}>
            {elapsed}/{total}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.centerContainer}>
      <div className={styles.profile}>
        <div className={styles.pfpSpinBorder}>
          <Image
            src="/mkazm.jpg"
            alt="Profile Picture"
            width={128}
            height={128}
          />
        </div>
        <h1>mkazm</h1>
      </div>
      <SpotifyStatus />
      <FallingPhrases />

      <div className={styles.mainContent}>
        <p>
          So uh. Hi. This is my portfolio? My story? My workplace? It's my
          everything I guess...
        </p>
        <p>
          I just thought it's much better than AI slop that 99% portfolios run
          on. Those don't tell anything about actual person. Also I wanted a
          place to dump my projects, experiments, thoughts and rants.
        </p>
        <p>
          You should be able to find a lot of info here, like: "what am I
          listening to", qualities, projects, even my thoughts and values (if I
          get slightly braver later). But unique thing I'm trying to give you
          others don't is possibility to understand my person, traits, tastes,
          tastes, mentality not just spam languages i can type in.
        </p>
        <p>
          First of all, current version of this site does NOT convey ME well.
          Thus, it's unused aside this repo. The decorations are ugly, the
          colors are bad, the layout is gone, everything is meh. Also if I'd aim
          for perfection, I wouldn't even ever have started coding it.
        </p>
        <p>
          If you just want something like a normal portfolio would, I'll add a
          button for it in the top left corner, that only shows qualities. Or
          you'll have to choose the version upon entering.
        </p>
        <h4>
          Also I feel like there's way too much text, and no one is going to it,
          especially if it's just introduction.
        </h4>
      </div>

      {/* Decorations (vines and construction tape) */}
      <Image
        src="/constructions-tape.png"
        alt="Constructions Tape"
        width={180}
        height={60}
        style={{
          position: "fixed",
          top: 100,
          right: 200,
          zIndex: 1000,
          transform: "rotate(30deg)",
          scale: "5",
          pointerEvents: "none",
        }}
      />
      <Image
        src="/vines.png"
        alt="Vines"
        width={720}
        height={480}
        style={{
          position: "fixed",
          top: -70,
          left: -50,
          zIndex: 1000,
          pointerEvents: "none",
        }}
      />
      <Image
        src="/vines2.png"
        alt="Vines"
        width={720}
        height={480}
        style={{
          position: "fixed",
          top: -110,
          right: 440,
          zIndex: 1000 - 1,
          pointerEvents: "none",
        }}
      />
      <Image
        src="/vines2.png"
        alt="Vines"
        width={720}
        height={480}
        style={{
          position: "fixed",
          top: -110,
          right: -50,
          zIndex: 1000 - 1,
          pointerEvents: "none",
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)",
        }}
      />
      <h1
        style={{
          position: "fixed",
          top: 200,
          right: 100,
          zIndex: 1000,
          transform: "rotate(30deg)",
          pointerEvents: "none",
        }}
      >
        Most definitely under construction!
      </h1>

      <Image
        src="https://i.pinimg.com/originals/1c/79/ac/1c79ac50b06bb42a24058bf13c162a3e.gif"
        alt="Pinimg Cat"
        width={240}
        height={380}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1001,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
