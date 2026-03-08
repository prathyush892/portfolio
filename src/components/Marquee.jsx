import React from 'react';
import { marqueeItems } from '../data/portfolioData';
import styles from './Marquee.module.css';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div className={styles.item} key={i}>
            <span className={styles.diamond}>◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
