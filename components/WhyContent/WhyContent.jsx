
  //WhyContent
  import React from 'react';
import styles from './WhyContent.module.css';
import Image from 'next/image';

export const WhyContent = () => {
  return (
    <div className={styles.WhyContent__contenedor}>
          <div className={styles.WhyContent__contenedor__imagen}>
      <Image src="/posibilidades.svg" width={400} height={400}  alt='Grafico que representa las posibilidades de la herramienta para Restaurar Fotos Antiguas Online'/>
    </div>  
    <div className={styles.WhyContent__contenedor__texto}>
      <h2 className={styles.WhyContent__contenedor__texto__titulo}>Un Mundo de Posibilidades</h2>
      <p className={styles.WhyContent__contenedor__texto__parrafo}>Aquí mostramos la diversidad de usos de nuestra herramienta, desde proyectos de genealogía hasta la preservación de archivos históricos. Inspírate con nuestra galería de casos destacados y ve cómo otros han revitalizado su historia personal y colectiva a través de nuestras restauraciones.</p>
      </div>
  
      
    </div>
  );
}

export default WhyContent

;