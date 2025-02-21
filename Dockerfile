# Etapa 1: Backend (Laravel)
FROM php:8.2-fpm AS backend

# Instalar dependencias de PHP y herramientas necesarias
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd pdo pdo_mysql

WORKDIR /var/www

# Copiar los archivos de Laravel
COPY . .

# Instalar dependencias de PHP usando Composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Etapa 2: Frontend (React con Inertia.js)
FROM node:lts AS frontend

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json (o pnpm-lock.yaml si usas pnpm)
COPY package.json /app/
COPY package-lock.json /app/

# Instalar dependencias de Node.js
RUN npm install -g  pnpm && pnpm install

# Copiar los archivos de React
COPY resources/js /app/

# Construir los archivos de React (Inertia.js)
RUN pnpm run dev # O `npm run prod` para producción

# Etapa final: Combinar backend y frontend
FROM php:8.1-fpm

# Copiar el código del backend
COPY --from=backend /var/www /var/www

# Copiar los archivos del frontend (react)
COPY --from=frontend /app/public /var/www/public

WORKDIR /var/www

# Exponer el puerto (ajustar si es necesario)
EXPOSE 80

# Comando para ejecutar el servidor de Laravel
CMD ["php-fpm"]

