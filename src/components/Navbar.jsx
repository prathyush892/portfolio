import React, { useState } from 'react';
import { useNavScroll } from '../hooks/useAnimations';
import styles from './Navbar.module.css';

const navItems = ['about', 'skills', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const scrolled = useNavScroll(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        P<span className={styles.logoAccent}>.</span>dev
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li key={item}>
            <button className={styles.navLink} onClick={() => handleNav(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={() => handleNav('contact')}>
        Hire Me
      </button>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
