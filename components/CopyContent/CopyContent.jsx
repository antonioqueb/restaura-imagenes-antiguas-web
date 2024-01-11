
  //CopyContent
  import React from 'react';
import style from './CopyContent.module.css';
import Image from 'next/image';

export const CopyContent = () => {
  return (
    
    <>
    <section className={style.container_master}>
    <section  className={style.container}>
      <div className={style.container__img}>
        <Image src="/antesdespues_3.jpg" width={350} height={350} />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Tecnología al Servicio de Tus Recuerdos</h2>
        <p className={style.container__text__paragraph}>Restaurar Fotos Antiguas Online' con tal precisión? Esta sección te lleva detrás de las escenas de nuestro proceso de restauración impulsado por IA.</p>
        <p className={style.container__text__paragraph}>Descubre cómo cada pixel es cuidadosamente mejorado para devolver la claridad y el color a tus imágenes más preciadas. Explora nuestro tutorial para comenzar a restaurar tus imágenes hoy mismo y consulta nuestras Preguntas Frecuentes para cualquier inquietud.</p>
      </div>
    </section>
          <section className={style.container_reverse}>
        <div className={style.container__img}>
          <Image src="/antesdespues_2.jpg" width={350} height={350} />
        </div>
            <div className={style.container__text}>
        <h2 className={style.container__text__title}>Un Mundo de Posibilidades</h2>
        <p className={style.container__text__paragraph}>Restaurar Fotos Antiguas Online' es solo el comienzo.</p>
        <p className={style.container__text__paragraph}>Aquí mostramos la diversidad de usos de nuestra herramienta, desde proyectos de genealogía hasta la preservación de archivos históricos. Inspírate con nuestra galería de casos destacados y ve cómo otros han revitalizado su historia personal y colectiva a través de nuestras restauraciones.</p>
      </div>
      </section>
   
        <section  className={style.container}>
      <div className={style.container__img}>
        <Image src="/antesdespues_1.jpg" width={350} height={350} />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Calidad y Confianza en Restauración</h2>
        <p className={style.container__text__paragraph}>Elegir dónde y cómo 'Restaurar Fotos Antiguas Online' es crucial.</p>
        <p className={style.container__text__paragraph}>Nuestra tecnología de vanguardia garantiza resultados de alta calidad, respetando la integridad de tus imágenes originales. Descubre por qué somos la opción preferida para la restauración de imágenes y cómo nos esforzamos por ofrecerte siempre lo mejor en cada foto que procesamos.</p>
      </div>
    </section>
    </section>
    </>
  );
}

export default CopyContent;