
import styles from './HomeTitle.module.css';


export const HomeTitle = () => {
 

  return (
  
        <header className={styles.HomeTitle__header}>
          <h2 className={styles.HomeTitle__title}>Restaurar Fotos <span className={styles.HomeTitle__title__span}>Antiguas Online</span>
          </h2>
        </header>
  );
};

export default HomeTitle;
