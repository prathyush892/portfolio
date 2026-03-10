import React from 'react';
import { useReveal, useSkillBars } from '../hooks/useAnimations';
import { personalInfo, skillBars } from '../data/portfolioData';
import styles from './About.module.css';

export default function About() {
  const headerRef = useReveal();
  const cardRef   = useReveal();
  const contentRef = useReveal();
  const barsRef   = useSkillBars();

  return (
    <section id="about" className={styles.about}>
      <div className="section-inner">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">Who I Am</div>
          <h2 className="section-title">
            Developer with an <span className="accent">eye</span>
            <br />for <span className="accent2">design</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left — identity card */}
          <div className={`reveal ${styles.visualCol}`} ref={cardRef}>
            <div className={styles.card}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.initials}>PP</span>
              </div>
              <div className={styles.cardName}>{personalInfo.name}</div>
              <div className={styles.cardRole}>{'// React Developer & UI Engineer'}</div>
              <div className={styles.cardLocation}>📍 {personalInfo.location}</div>
              <div className={styles.cardTags}>
                {['React', 'Next.js', 'TypeScript', 'UI/UX'].map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — bio + bars */}
          <div className={`reveal ${styles.contentCol}`} ref={contentRef}>
            <div className={styles.bio}>
              {personalInfo.bio.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/8\+ years/g, '<strong>8+ years</strong>')
                    .replace(/design and engineering/g, '<strong>design and engineering</strong>')
                    .replace(/Wavemaker Inc\./g, '<strong>Wavemaker Inc.</strong>')
                    .replace(/Hedgehog Lab/g, '<strong>Hedgehog Lab</strong>')
                    .replace(/Toronto/g, '<strong>Toronto</strong>')
                }} />
              ))}
            </div>

            {/* Skill bars */}
            <div className={styles.barsWrap} ref={barsRef}>
              {skillBars.map(({ label, value }) => (
                <div className={styles.barItem} key={label}>
                  <div className={styles.barHeader}>
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      data-width={value}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
