"use client";

import styles from "../page.module.css";

export function JournalSection() {
  // Sample journal entries - you can replace with your actual thoughts
  const journalEntries = [
    {
      date: "2025-09-28",
      mood: "reflective",
      title: "On Learning and Growth",
      content:
        "Today I realized that the best code isn't the most complex - it's the most understandable. Sometimes the simplest solution is the most elegant. I'm learning to appreciate clean, readable code over clever tricks.",
    },
    {
      date: "2025-09-25",
      mood: "excited",
      title: "New Project Ideas",
      content:
        "Been thinking about creating something that actually matters to people. Not just another todo app, but something that solves a real problem I've experienced. Maybe something related to organizing thoughts and ideas?",
    },
    {
      date: "2025-09-20",
      mood: "thoughtful",
      title: "On Perfectionism",
      content:
        "I keep waiting for the 'perfect' moment to start projects or publish work. But perfection is the enemy of progress. Better to ship something imperfect than to ship nothing at all.",
    },
  ];

  const moodEmojis = {
    happy: "😊",
    sad: "😢",
    excited: "🤩",
    thoughtful: "🤔",
    reflective: "💭",
    frustrated: "😤",
    calm: "😌",
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h1>📖 Thoughts & Journal</h1>
        <p>My digital journal - thoughts, feelings, and reflections</p>
      </div>

      <div className={styles.journalStats}>
        <div className={styles.statCard}>
          <h3>{journalEntries.length}</h3>
          <p>Total Entries</p>
        </div>
        <div className={styles.statCard}>
          <h3>∞</h3>
          <p>Thoughts per day</p>
        </div>
        <div className={styles.statCard}>
          <h3>💡</h3>
          <p>Current mood</p>
        </div>
      </div>

      <div className={styles.journalEntries}>
        {journalEntries.map((entry, index) => (
          <article key={index} className={styles.journalEntry}>
            <div className={styles.entryHeader}>
              <div className={styles.entryDate}>
                {new Date(entry.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className={styles.entryMood}>
                {moodEmojis[entry.mood]} {entry.mood}
              </div>
            </div>
            <h3 className={styles.entryTitle}>{entry.title}</h3>
            <div className={styles.entryContent}>{entry.content}</div>
          </article>
        ))}
      </div>

      <div className={styles.addEntrySection}>
        <h3>✍️ Write New Entry</h3>
        <div className={styles.placeholderForm}>
          <input placeholder="Entry title..." className={styles.journalInput} />
          <select className={styles.moodSelect}>
            <option>Select mood...</option>
            {Object.keys(moodEmojis).map((mood) => (
              <option key={mood} value={mood}>
                {moodEmojis[mood]} {mood}
              </option>
            ))}
          </select>
          <textarea
            placeholder="What's on your mind?"
            className={styles.journalTextarea}
            rows={4}
          />
          <button className={styles.addButton}>Save Entry</button>
        </div>
      </div>
    </div>
  );
}
