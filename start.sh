#!/bin/bash

# Inicia el servidor de Laravel
echo "Iniciando servidor de Laravel..."
php artisan serve &

# Inicia Vite (npm run dev)
echo "Iniciando Vite..."
npm run dev
