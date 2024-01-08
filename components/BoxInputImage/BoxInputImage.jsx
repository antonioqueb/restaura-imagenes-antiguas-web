
'use client';
import React, { useState, useRef } from 'react';
import styles from './BoxInputImage.module.css';
import { FaImage } from "react-icons/fa";
import HomeTitle from '../HomeTitle/HomeTitle';


export const BoxInputImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSubmit = () => {
    // Aquí iría la lógica para enviar el archivo al servidor
    console.log('Archivo para enviar:', selectedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
  <>
    <div className={styles.BoxInputImage__container}>
        <div className={styles.BoxInputImage__content}>
          <div className={styles.BoxInputImage__section_input}>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange} 
              className={styles.BoxInputImage__input} 
              style={{ display: 'none' }} // El input de archivo está oculto
            />
            <button onClick={handleButtonClick} className={styles.BoxInputImage__button_input}>
              <FaImage className={styles.BoxInputImage__icon}/>
              Cargar imagen
            </button>
            <p className={styles.BoxInputImage__text_submit}>o arrastra una imagen.

</p>
          </div>
          {selectedFile && (
            <div className={styles.BoxInputImage__fileDetails}>
              <span>{selectedFile.name}</span>
              <br />
              <button onClick={handleFileSubmit} className={styles.BoxInputImage__button}>
                Restaurar Foto
              </button>
            </div>
          )}
        </div>

       
    </div>
    <div className={styles.BoxInputImage__container_footer}>
     <p className={styles.BoxInputImage__text}>
          Al cargar una imagen o URL, aceptas nuestras Condiciones del servicio. Esta página está protegida por hCaptcha y se pueden aplicar su Política de privacidad y sus Condiciones del servicio.
        </p>
    </div>
      </>
  );
};

export default BoxInputImage;
