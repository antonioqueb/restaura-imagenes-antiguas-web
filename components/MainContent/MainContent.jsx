
  //MainContent
  import React from 'react';
import styles from './MainContent.module.css';
import TitileTestimony from '../TitileTestimony/TitileTestimony';
import TestimonyCardItem from '../TestimonyCardItem/TestimonyCardItem';

export const MainContent = () => {
  return (
    <> 

    <div className={styles.MainContent__contenedor}>

      <section className={styles.MainContent__section__testimony}>
        <TitileTestimony/>
        <div className={styles.MainContent__section__testimony__container}>
          <TestimonyCardItem/>
          </div>

      </section>
      <section className={styles.MainContent__section__how}>
      </section>
      <section className={styles.MainContent__section__where}>
      </section>
      <section className={styles.MainContent__section__why}>
      </section>



      
  
      
    </div>

    </>
   
  );
}

export default MainContent

;