'use client';
import React, { useState, useRef } from 'react';
import styles from './BoxInputImage.module.css';
import { FaImage } from "react-icons/fa";

export const BoxInputImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const handleFileSubmit = () => console.log('Archivo para enviar:', selectedFile);
  const handleButtonClick = () => fileInputRef.current.click();

  return (
    <>
      <div className={styles.BoxInputImage__container}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className={styles.BoxInputImage__input}
            style={{ display: 'none' }}
          />
          <button onClick={handleButtonClick} className={styles.BoxInputImage__button_input}>
            <FaImage className={styles.BoxInputImage__icon} />
            Cargar imagen
          </button>
          <p className={styles.BoxInputImage__text_submit}>o arrastra una imagen.</p>
        {selectedFile && (
          <div className={styles.BoxInputImage__fileDetails}>
            <span>{selectedFile.name}</span>
            <button onClick={handleFileSubmit} className={styles.BoxInputImage__button}>
              Restaurar Foto Antigua
            </button>
          </div>
        )}
      </div>
      <div className={styles.BoxInputImage__container_footer}>
        <p className={styles.BoxInputImage__text}>
          Al cargar una imagen, aceptas nuestras Condiciones del servicio. Más información
        </p>
      </div>
    </>
  );
};

export default BoxInputImage;
