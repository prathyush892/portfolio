import React from 'react';
import { useReveal, useRevealList } from '../hooks/useAnimations';
import { experiences } from '../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  const headerRef = useReveal();
  const listRef   = useRevealList(experiences.length);

  return (
    <section id="experience" className={styles.experience}>
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">Career Path</div>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
        </div>

        <div className={styles.timeline} ref={listRef}>
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className={`reveal ${styles.item}`}
              data-reveal-item
            >
              <div className={`${styles.dot} ${styles[`dot_${exp.dotColor}`]}`} />

              <div className={styles.header}>
                <div>
                  <div className={styles.company}>{exp.company}</div>
                  <div className={styles.role}>// {exp.role}</div>
                </div>
                <div className={styles.period}>{exp.period}</div>
              </div>

              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
