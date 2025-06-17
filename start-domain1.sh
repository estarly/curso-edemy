#!/bin/bash

# Script para iniciar el proyecto en desarrollo (puerto 3020)
echo "Iniciando proyecto en DESARROLLO (puerto 3020)..."

# Copiar configuración específica del desarrollo
cp env.domain1 .env

# Instalar dependencias si es necesario
npm install

# Construir el proyecto
npm run build

# Iniciar en puerto 3020
npm run start:dev 