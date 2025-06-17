#!/bin/bash

# Script para iniciar el proyecto en producción (puerto 3030)
echo "Iniciando proyecto en PRODUCCIÓN (puerto 3030)..."

# Copiar configuración específica de producción
cp env.domain2 .env

# Instalar dependencias si es necesario
npm install

# Construir el proyecto
npm run build

# Iniciar en puerto 3030
npm run start:prod 