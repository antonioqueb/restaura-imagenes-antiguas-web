import styles from './HomeTitle.module.css';

export const HomeTitle = () => {
    
  return (
  
        <header className={styles.HomeTitle__header}>
          <h1 className={styles.HomeTitle__title}>Restaurar Fotos <span className={styles.HomeTitle__title__span}>Antiguas Online</span>
          </h1>
        </header>
  );

};

export default HomeTitle;
