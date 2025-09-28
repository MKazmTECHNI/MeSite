"use client";

import styles from "../page.module.css";

export function ValuesSection() {
  const coreValues = [
    {
      title: "Authenticity",
      icon: "🎭",
      description:
        "Being genuine and true to myself, even when it's uncomfortable. I'd rather be disliked for who I am than liked for who I'm not.",
      examples: [
        "Writing honest code comments",
        "Admitting when I don't know something",
        "Not pretending to like technologies just because they're popular",
      ],
    },
    {
      title: "Continuous Learning",
      icon: "📚",
      description:
        "Always growing, always curious. The moment I think I know everything is the moment I stop being useful.",
      examples: [
        "Reading documentation thoroughly",
        "Experimenting with new technologies",
        "Learning from mistakes instead of hiding them",
      ],
    },
    {
      title: "Simplicity",
      icon: "✨",
      description:
        "Elegance through simplicity. The best solutions are often the simplest ones that solve the actual problem.",
      examples: [
        "Writing readable code over clever code",
        "Choosing boring technology that works",
        "Solving real problems, not imaginary ones",
      ],
    },
    {
      title: "Empathy",
      icon: "💝",
      description:
        "Understanding that everyone has their own struggles and perspectives. Good code considers the next developer who will read it.",
      examples: [
        "Writing helpful error messages",
        "Creating inclusive interfaces",
        "Considering user experience in every decision",
      ],
    },
  ];

  const beliefs = [
    "Code should tell a story that humans can understand",
    "Perfect is the enemy of good (but good is the enemy of shipped)",
    "The best debugging tool is careful thinking",
    "Documentation is love letters to your future self",
    "Technology should serve people, not the other way around",
  ];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h1>⭐ Values & Beliefs</h1>
        <p>What drives me and shapes my decisions</p>
      </div>

      <section className={styles.valuesSection}>
        <h2>🌟 Core Values</h2>
        <div className={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueHeader}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
              </div>
              <p className={styles.valueDescription}>{value.description}</p>
              <div className={styles.valueExamples}>
                <h4>In practice:</h4>
                <ul>
                  {value.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.beliefsSection}>
        <h2>💭 Things I Believe</h2>
        <div className={styles.beliefsList}>
          {beliefs.map((belief, index) => (
            <div key={index} className={styles.beliefItem}>
              <span className={styles.beliefBullet}>→</span>
              <span className={styles.beliefText}>{belief}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.personalNote}>
        <h2>📝 Personal Note</h2>
        <div className={styles.noteCard}>
          <p>
            These values aren't just words on a page - they're principles I try
            to live by in my code, my interactions, and my decisions. They've
            evolved over time and will probably continue to change as I grow and
            learn more about myself and the world.
          </p>
          <p>
            I'm putting this here partly for you to understand who I am, but
            mostly for future me to remember what I stood for at this point in
            my life. If you're reading this years from now and cringing... well,
            that probably means you've grown! 🌱
          </p>
        </div>
      </section>
    </div>
  );
}
