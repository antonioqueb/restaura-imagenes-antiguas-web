const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateJsTemplate = (name, columns, divideMore, divideSide, additionalFeatures) => {
  let divs = '';
  for (let i = 0; i < columns; i++) {
    const columnClass = `styles.${name}__column`;
    let innerDivs = '';
    if (divideMore) {
      if (divideSide === 'ambos' || divideSide === 'izquierdo') {
        innerDivs += `<div className={styles.${name}__inner-div-left}>División Izquierda ${i + 1}</div>`;
      }
      if (divideSide === 'ambos' || divideSide === 'derecho') {
        innerDivs += `<div className={styles.${name}__inner-div-right}>División Derecha ${i + 1}</div>`;
      }
    }
    const innerContent = divideMore ? innerDivs : `Columna ${i + 1}`;
    divs += `<div className={${columnClass}}>${innerContent}</div>\n  `;
  }

  let additionalJs = '';
  if (additionalFeatures.includes('boton')) {
    additionalJs += `<button className={styles.${name}__boton}>Haz clic aquí</button>\n  `;
  }

  return `
  //${name}
  import React from 'react';
import styles from './${name}.module.css';

export const ${name} = () => {
  return (
    <div className={styles.${name}__contenedor}>
      ${divs}
      ${additionalJs}
    </div>
  );
}

export default ${name}

;`;
};

const generateCssTemplate = (name, columns, divideMore, additionalFeatures) => {
  let columnStyles = '';
  for (let i = 0; i < columns; i++) {
    columnStyles += `.${name}__column {\n  flex: 1;\n  border: 1px solid white;\n  background-color: transparent;\n}\n\n`;
    if (divideMore) {
      columnStyles += `.${name}__inner-div-left, .${name}__inner-div-right {\n  /* Estilos adicionales para divisiones internas */\n  border: 1px solid white;\n  background-color: transparent;\n}\n\n`;
    }
  }

  let additionalCss = '';
  if (additionalFeatures.includes('boton')) {
    additionalCss += `.${name}__boton {\n  /* Estilos adicionales para botones */\n  border: 1px solid white;\n  background-color: transparent;\n}\n\n`;
  }

  return `.${name}__contenedor {\n  display: flex;\n  border: 1px solid white;\n  background-color: transparent;\n}\n\n${columnStyles}${additionalCss}`;
};

rl.question('¿Componente o Página? (c/p): ', (type) => {
  rl.question('Ingresa el nombre: ', (name) => {
    rl.question('¿Cuántas columnas? (Ingresa un número): ', (columns) => {
      rl.question('¿Dividir más las columnas? (sí/no): ', (divideMoreInput) => {
        const divideMore = divideMoreInput.trim().toLowerCase() === 'sí';
        let divideSide = null;
        if (divideMore) {
          rl.question('¿Qué lado dividir? (derecho/izquierdo/ambos): ', (sideInput) => {
            divideSide = sideInput.trim().toLowerCase();
            askForAdditionalFeatures(name, columns, divideMore, divideSide, type);
          });
        } else {
          askForAdditionalFeatures(name, columns, divideMore, divideSide, type);
        }
      });
    });
  });
});

function askForAdditionalFeatures(name, columns, divideMore, divideSide, type) {
  rl.question('¿Alguna característica adicional? (botón, entrada, etc., separa por comas): ', (features) => {
    const directory = type.toLowerCase() === 'c' ? './components' : './app';
    const fileName = type.toLowerCase() === 'c' ? `${name}.jsx` : 'page.jsx';
    const jsFilePath = path.join(directory, name, fileName);
    const cssFilePath = path.join(directory, name, `${name}.module.css`);

    const additionalFeatures = features.split(',').map(feature => feature.trim().toLowerCase());
    const jsContent = generateJsTemplate(name, parseInt(columns), divideMore, divideSide, additionalFeatures);
    const cssContent = generateCssTemplate(name, parseInt(columns), divideMore, additionalFeatures);

    fs.mkdirSync(path.join(directory, name), { recursive: true });
    fs.writeFileSync(jsFilePath, jsContent, 'utf8');
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');

    console.log(`Se creó ${type === 'c' ? 'el componente' : 'la página'} ${name} en ${jsFilePath} con su módulo CSS correspondiente en ${cssFilePath}`);
    rl.close();
  });
}
