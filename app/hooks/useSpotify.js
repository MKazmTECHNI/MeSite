"use client";

import { useState, useEffect } from "react";

export function useSpotify(discordUserId) {
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
        `https://api.lanyard.rest/v1/users/${discordUserId}`
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
  }, [discordUserId]);

  // Update current time every second for progress tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate progress data
  const progressData = spotifyData
    ? (() => {
        const start = spotifyData.timestamps.start;
        const end = spotifyData.timestamps.end;
        const durationMs = end - start;
        const elapsedMs = Math.max(0, currentTime - start);
        const elapsed = msToTime(elapsedMs);
        const total = msToTime(durationMs);
        return { elapsed, total, elapsedMs, durationMs };
      })()
    : null;

  return {
    spotifyData,
    progressData,
    isListening: !!spotifyData,
  };
}
