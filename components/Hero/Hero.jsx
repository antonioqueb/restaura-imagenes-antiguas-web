'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import BoxInputImage from '../BoxInputImage/BoxInputImage'; 
import ImageAfterBefore from '../ImageAfterBefore/ImageAfterBefore';
import HomeTitle from '../HomeTitle/HomeTitle';

export const Hero = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(position);
  };

  return (
    <div className={styles.Hero__container_master}>
    <div className={styles.Hero__container}>
      <div className={styles.Hero__start}>
     <ImageAfterBefore/>
      <HomeTitle />
      </div>
      <section className={styles.Hero__end}>
        <BoxInputImage />
       
      </section>
    </div>

    </div>
  );
  
};

export default Hero;
