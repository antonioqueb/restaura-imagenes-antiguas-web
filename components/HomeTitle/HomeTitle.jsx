
import styles from './HomeTitle.module.css';


export const HomeTitle = () => {
 

  return (
  
        <header className={styles.HomeTitle__header}>
          <h2 className={styles.HomeTitle__title}>Restaura tus fotos con<span className={styles.HomeTitle__title__span}> I.A.</span>
          </h2>
        </header>
  );
};

export default HomeTitle;
