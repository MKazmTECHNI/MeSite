"use client";

import Image from "next/image";
import { useSpotify } from "../hooks/useSpotify";
import styles from "../page.module.css";

export function SpotifyStatus({ discordUserId }) {
  const { spotifyData, progressData, isListening } = useSpotify(discordUserId);

  if (!isListening) {
    return null; // Don't show anything if not listening to Spotify
  }

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
          {progressData.elapsed}/{progressData.total}
        </span>
      </div>
    </div>
  );
}
