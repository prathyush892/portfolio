import React from 'react';
import { useReveal } from '../hooks/useAnimations';
import { contactLinks } from '../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-inner">
        <div className={styles.grid}>
          {/* Left */}
          <div className="reveal" ref={leftRef}>
            <div className="section-tag">Get In Touch</div>
            <div className={styles.bigText}>
              Let's build<br />
              <span className={styles.bigAccent}>something</span><br />
              great.
            </div>
            <p className={styles.sub}>
              Open to full-time roles, contract projects, and collaborations in
              Toronto or remote. Let's create something exceptional together.
            </p>
            <div className={styles.btnWrap}>
              <button
                className="btn-primary"
                onClick={() => alert('Add your resume PDF path in portfolioData.js')}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right — contact links */}
          <div className={`reveal ${styles.links}`} ref={rightRef}>
            {contactLinks.map((cl) => (
              <a
                key={cl.label}
                href={cl.href}
                className={styles.link}
                target={cl.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <div className={styles.linkIcon}>{cl.icon}</div>
                <div>
                  <div className={styles.linkLabel}>{cl.label}</div>
                  <div className={styles.linkValue}>{cl.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}