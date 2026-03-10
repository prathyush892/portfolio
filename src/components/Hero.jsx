import React, { useEffect, useRef } from 'react';
import { useCounter, useParallax } from '../hooks/useAnimations';
import { stats, personalInfo } from '../data/portfolioData';
import styles from './Hero.module.css';

function StatItem({ target, label, suffix }) {
  const { count, ref } = useCounter(target, 1800);
  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statNum}>
        <span>{count}</span>
        <span className={styles.statAccent}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function Hero() {
  const scrollY = useParallax();
  const particlesRef = useRef(null);

  /* spawn particles */
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 45; i++) {
      const p = document.createElement('div');
      p.className = styles.particle;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${8 + Math.random() * 15}s`;
      p.style.animationDelay = `${Math.random() * 12}s`;
      if (Math.random() > 0.7) p.style.background = 'var(--accent2)';
      if (Math.random() > 0.85) {
        p.style.background = 'var(--accent3)';
        p.style.width = '3px';
        p.style.height = '3px';
      }
      container.appendChild(p);
    }
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.hero}>
      {/* Parallax backgrounds */}
      <div
        className={styles.heroBg}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className={styles.heroOrb}
        style={{ transform: `translateY(calc(-50% + ${scrollY * 0.5}px))` }}
      >
        <div className={styles.orbInner} />
        <div className={styles.orbInner2} />
      </div>

      {/* Particles */}
      <div className={styles.particles} ref={particlesRef} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.heroLabel}>{personalInfo.availableFor}</div>

        <h1 className={styles.heroTitle}>
          <span className={styles.line}>Prathyush</span>
          <span className={styles.line}>
            <span className={styles.glitch} data-text="Prathipati">Prathipati</span>
          </span>
          <span className={`${styles.line} ${styles.dimLine}`}>React Dev.</span>
        </h1>

        <p className={styles.heroDesc}>
          8+ years crafting{' '}
          <strong className={styles.strong}>high-performance web applications</strong>{' '}
          with React, Next.js & modern stacks. From pixel-perfect UIs to scalable full-stack solutions.
        </p>

        <div className={styles.heroActions}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View My Work
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            Let's Talk
          </button>
        </div>

        <div className={styles.heroStats}>
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        Scroll to explore
      </div>
    </section>
  );
}
