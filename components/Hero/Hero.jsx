'use client';
import styles from './Hero.module.css';
import BoxInputImage from '../BoxInputImage/BoxInputImage'; 
import ImageAfterBefore from '../ImageAfterBefore/ImageAfterBefore';
import HomeTitle from '../HomeTitle/HomeTitle';
import MainContent from '../MainContent/MainContent';

export const Hero = () => {

  return (
    <>
    <div className={styles.Hero__container_master}>
      <div className={styles.Hero__container}>
        <div className={styles.Hero__start}>
          <div className={styles.Hero__image_container}>
          <ImageAfterBefore />
          </div>
          <div className={styles.Hero__title_container}>
          <HomeTitle />
          </div>
        </div>
        <section className={styles.Hero__end}>
          <BoxInputImage />
        </section>
      </div>
    </div>
    <MainContent />
    </>
  );
};

export default Hero;
