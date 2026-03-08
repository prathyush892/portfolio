import React from 'react';
import { useReveal, useRevealList } from '../hooks/useAnimations';
import { projects, personalInfo } from '../data/portfolioData';
import styles from './Projects.module.css';

const colorMap = {
  blue:   'pill-blue',
  purple: 'pill-purple',
  red:    'pill-red',
  green:  'pill-green',
};

export default function Projects() {
  const headerRef = useReveal();
  const gridRef   = useRevealList(projects.length);
  const ctaRef    = useReveal();

  return (
    <section id="projects" className={styles.projects}>
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">
            Sample <span className="accent2">Projects</span>
            <br />& <span className="accent">Demos</span>
          </h2>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {projects.map((proj) => (
            <div
              key={proj.title}
              className={`reveal ${styles.card}`}
              data-reveal-item
              style={{ '--project-accent': proj.accentColor }}
              role="article"
            >
              <div className={styles.cardNum}>
                {proj.num} / {proj.category}
              </div>
              <h3 className={styles.cardTitle}>{proj.title}</h3>
              <p className={styles.cardDesc}>{proj.desc}</p>
              <div className={styles.pills}>
                {proj.pills.map((p) => (
                  <span key={p.label} className={`pill ${colorMap[p.color]}`}>
                    {p.label}
                  </span>
                ))}
              </div>
              <span className={styles.arrow}>↗</span>
            </div>
          ))}
        </div>

        <div className={styles.cta} ref={ctaRef}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <span>⬡</span> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
