"use client";

import styles from "../page.module.css";

export function QuotesSection() {
  // You can replace these with your actual quote collection
  const quotes = [
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      category: "Motivation",
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      category: "Programming",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "Life",
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "Wisdom",
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h1>💭 Quote Collection</h1>
        <p>Wisdom I've gathered along the way</p>
      </div>

      <div className={styles.quotesGrid}>
        {quotes.map((quote, index) => (
          <div key={index} className={styles.quoteCard}>
            <div className={styles.quoteText}>"{quote.text}"</div>
            <div className={styles.quoteAuthor}>— {quote.author}</div>
            <div className={styles.quoteCategory}>{quote.category}</div>
          </div>
        ))}
      </div>

      <div className={styles.addQuoteSection}>
        <h3>✨ Add New Quote</h3>
        <p>This could be a form to add new quotes to your collection!</p>
        <div className={styles.placeholderForm}>
          <input placeholder="Quote text..." className={styles.quoteInput} />
          <input placeholder="Author..." className={styles.quoteInput} />
          <input placeholder="Category..." className={styles.quoteInput} />
          <button className={styles.addButton}>Add Quote</button>
        </div>
      </div>
    </div>
  );
}
