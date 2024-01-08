FROM node:20.9.0 AS builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /app


# Copia los archivos de dependencias de Node.js
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm ci

# Copia el resto de los archivos del proyecto
COPY app/ ./

# Construye la aplicación Next.js
RUN npm run build

# Configura la fase de ejecución usando la misma imagen base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el resultado de la compilación desde la fase de construcción
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Define variables de entorno
ENV NODE_ENV=production
ENV PORT=80

# Expone el puerto 80
EXPOSE 80

# Inicia la aplicación
CMD ["npm", "start"]