"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { SpotifyStatus } from "./components/SpotifyStatus";
import { FallingPhrases } from "./components/FallingPhrases";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { PersonalSection } from "./components/PersonalSection";

export default function Home() {
  const DISCORD_USER_ID = "700420330715480166";
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "personal":
        return <PersonalSection />;
      case "projects":
        return (
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h1>🛠️ Projects</h1>
            </div>
          </div>
        );
      default:
        return (
          <>
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
            <SpotifyStatus discordUserId={DISCORD_USER_ID} />
            <div className={styles.mainContent}>
              <p>
                So uh. Hi. This is my portfolio? My story? My workplace? It's my
                everything I guess...
              </p>
              <p>
                I just thought it's much better than AI slop that 99% portfolios
                run on. Those don't tell anything about actual person. Also I
                wanted a place to dump my projects, experiments, thoughts and
                rants.
              </p>
              <p>
                You should be able to find a lot of info here, like: "what am I
                listening to", qualities, projects, even my thoughts and values
                (if I get slightly braver later). But unique thing I'm trying to
                give you others don't is possibility to understand my person,
                traits, tastes, tastes, mentality not just spam languages i can
                type in.
              </p>
              <p>
                First of all, current version of this site does NOT convey ME
                well. Thus, it's unused aside this repo. The decorations are
                ugly, the colors are bad, the layout is gone, everything is meh.
                Also if I'd aim for perfection, I wouldn't even ever have
                started coding it.
              </p>
              <p>
                If you just want something like a normal portfolio would, I'll
                add a button for it in the top left corner, that only shows
                qualities. Or you'll have to choose the version upon entering.
              </p>
              <h4>
                Also I feel like there's way too much text, and no one is going
                to it, especially if it's just introduction.
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
          </>
        );
    }
  };

  return (
    <div className={styles.centerContainer}>
      <HamburgerMenu
        onSectionChange={setCurrentSection}
        currentSection={currentSection}
      />
      <FallingPhrases />
      {renderSection()}
    </div>
  );
}
