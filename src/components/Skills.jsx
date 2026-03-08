import React from 'react';
import { useReveal, useRevealList } from '../hooks/useAnimations';
import { skillCards } from '../data/portfolioData';
import styles from './Skills.module.css';

const colorMap = {
  blue:   'pill-blue',
  purple: 'pill-purple',
  red:    'pill-red',
  green:  'pill-green',
};

export default function Skills() {
  const headerRef = useReveal();
  const gridRef   = useRevealList(skillCards.length);

  return (
    <section id="skills" className={styles.skills}>
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">Tech Arsenal</div>
          <h2 className="section-title">
            Skills &amp; <span className="accent">Technologies</span>
          </h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {skillCards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal ${styles.card} ${styles[`card${i}`]}`}
              data-reveal-item
            >
              <span className={styles.icon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.pills}>
                {card.pills.map((p) => (
                  <span key={p} className={`pill ${colorMap[card.color]}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
