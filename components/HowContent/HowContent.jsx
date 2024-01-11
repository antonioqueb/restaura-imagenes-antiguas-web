
  //  HowContent
import styles from './HowContent.module.css';
import Image from 'next/image';


export const HowContent = () => {
  return (
    <div className={styles.HowContent__contenedor}>

    <div className={styles.HowContent__contenedor__imagen}>
      <Image src="/restaurar.svg" width={300} height={300} alt='Grafico que representa la tecnología de la herramienta para Restaurar Fotos Antiguas Online Gratis' />
    </div>  
    <div className={styles.HowContent__contenedor__texto}>
      <h2 className={styles.HowContent__contenedor__texto__titulo}>Tecnología al Servicio de Tus Recuerdos</h2>
      <p className={styles.HowContent__contenedor__texto__parrafo}>Restaurar Fotos Antiguas Online con tal precisión? Esta sección te lleva detrás de las escenas de nuestro proceso de restauración impulsado por IA.</p>
      <p className={styles.HowContent__contenedor__texto__parrafo}>Descubre cómo cada pixel es cuidadosamente mejorado para devolver la claridad y el color a tus imágenes más preciadas. Explora nuestro tutorial para comenzar a restaurar tus imágenes hoy mismo y consulta nuestras Preguntas Frecuentes para cualquier inquietud.</p>
      </div>
    </div>
  );
}

export default HowContent

;