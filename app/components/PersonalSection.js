"use client";

import { useState } from "react";
import styles from "../page.module.css";

export function PersonalSection() {
  const [activeTab, setActiveTab] = useState("quotes");

  const tabs = [
    { id: "quotes", label: "Quotes", icon: "💭" },
    { id: "journal", label: "Journal", icon: "📝" },
    { id: "Some other random sh", label: "Some other random sh", icon: "⭐" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "quotes":
        return (
          <div className={styles.tabContent}>
            <h2>💭 Quotes Collection</h2>
            <p>my collection of wisdom and inspiration.</p>
          </div>
        );
      case "journal":
        return (
          <div className={styles.tabContent}>
            <h2>📝 Journal & Thoughts</h2>
            <p>Personal reflections, thoughts, and daily musings.</p>
          </div>
        );
      case "Some other random sh":
        return (
          <div className={styles.tabContent}>
            <h2>⭐ Some other random sh</h2>
            <p>Core principles and beliefs that guiding decisions.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h1>📖 Personal</h1>
        <p>Thoughts, values, and collected wisdom</p>
        <small>
          be informed, that most of it, is gonna stay hidden in db, till I'm
          comfortable releasing it
        </small>
      </div>

      <div className={styles.tabNavigation}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabIcon}>{tab.icon}</span>
            <span className={styles.tabLabel}>{tab.label}</span>
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
}
