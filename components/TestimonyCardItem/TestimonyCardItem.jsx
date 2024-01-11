// TestimonyCardItem.js
import React from 'react';
import Image from 'next/image';
import testimonios from '../../data/Testimony.json';
import styles from './TestimonyCardItem.module.css';

export const TestimonyCardItem = () => {
  return (
    <div className={styles['testimony-card-item']}>
      {testimonios.testimonios.map((testimonio, index) => (
        <div key={index} className={styles['testimony-card-item__card']}>
          <Image 
            src={testimonio.fotoPerfil} 
            alt={`Foto de perfil de ${testimonio.nombre}`} 
            width={100} // Ajusta según tus necesidades
            height={100} // Ajusta según tus necesidades
            className={styles['testimony-card-item__photo']}
          />
          <div className={styles['testimony-card-item__details']}>
            <h3 className={styles['testimony-card-item__name']}>{testimonio.nombre}</h3>
            <p className={styles['testimony-card-item__location']}>{testimonio.ubicacion}</p>
            <p className={styles['testimony-card-item__text']}>{testimonio.testimonio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonyCardItem;
