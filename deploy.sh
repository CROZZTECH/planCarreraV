#!/bin/bash

# Construir la aplicación Angular para producción
ng build --configuration=production --aot

# Sincronizar los archivos construidos con el bucket S3
aws s3 sync dist/plan-carrera-v/browser/ s3://argosplancarrera --cache-control "no-store"

echo "Despliegue completado"