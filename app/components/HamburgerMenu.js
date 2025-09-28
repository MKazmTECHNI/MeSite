"use client";

import { useState } from "react";
import styles from "../page.module.css";

export function HamburgerMenu({ onSectionChange, currentSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "personal", label: "Personal", icon: "📖" },
    { id: "projects", label: "Projects", icon: "🛠️" },
  ];

  const handleItemClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div className={styles.menuOverlay} onClick={() => setIsOpen(false)} />
      )}

      {/* Menu Panel */}
      <div className={`${styles.menuPanel} ${isOpen ? styles.menuOpen : ""}`}>
        <div className={styles.menuHeader}>
          <h2>Navigation</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className={styles.menuNav}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.menuItem} ${
                currentSection === item.id ? styles.active : ""
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuLabel}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.menuFooter}>
          <p>
            ✨ "If you don't know where to put something, put it in the
            hamburger menu" ✨
          </p>
        </div>
      </div>
    </>
  );
}
