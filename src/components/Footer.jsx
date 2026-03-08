import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>PP.dev</div>
      <div className={styles.copy}>
        © 2025 Prathyush Prathipati · Designed &amp; Built with 🖤 in Toronto
      </div>
      <div className={styles.version}>v1.0.0</div>
    </footer>
  );
}
