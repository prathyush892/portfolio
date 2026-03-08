import React from 'react';
import { useCursor } from '../hooks/useAnimations';
import styles from './Cursor.module.css';

export default function Cursor() {
  const { pos, ring, hovered } = useCursor();

  return (
    <>
      <div
        className={`${styles.cursor} ${hovered ? styles.hovered : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`${styles.ring} ${hovered ? styles.ringHovered : ''}`}
        style={{ left: ring.x, top: ring.y }}
      />
    </>
  );
}
