
'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ImageAfterBefore.module.css';
import BoxInputImage from '../BoxInputImage/BoxInputImage'; // Asegúrate de tener este import si estás usando BoxInputImage

export const ImageAfterBefore = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(position);
  };

  return (
    <section className={styles.ImageAfterBefore__start} onMouseMove={handleMouseMove}>
      <div className={styles.ImageAfterBefore__beforeAfter} style={{ '--slider-position': sliderPosition + '%' }}>
          <Image className={styles.ImageAfterBefore__image__before} src="/antes.png" alt="Antes" width={400} height={400} />
          <Image className={styles.ImageAfterBefore__image__after} src="/despues.png" alt="Después" width={400} height={400} />
          <div className={styles.ImageAfterBefore__slider} />
        </div>
      </section>
  );
};

export default ImageAfterBefore;
