# Parqueadero API - Instrucciones de instalación y ejecución 🚗🏍️

Este proyecto es una API REST desarrollada con Express para gestionar un parqueadero que acepta motos y carros.

## Tecnologías utilizadas
- Node.js
- Express.js
- MySQL 

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

```bash
git clone https://github.com/STBenji/Prueba_Tecnica_NewIntech.git
cd Prueba_Tecnica_NewIntech
npm install
```

## Configuración de variables de entorno

Antes de ejecutar el proyecto, asegúrate de configurar las siguientes variables de entorno. Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

```js
APP_PORT=puerto_de_tu_aplicación
DB_USER=usuario_del_gestor_de_base_de_datos
DB_PASSWORD=contraseña_del_gestor_de_base_de_datos
DB_HOST=nombre_del_host_del_gestor_de_base_de_datos
DB_NAME=nombre_de_la_base_de_datos
DB_PORT=puerto_del_gestor_de_base_de_datos
```
Asegúrate de cambiar los valores de las variables según tu configuración.

## Ejecución
Una vez configuradas las variables de entorno, puedes iniciar el servidor con el siguiente comando:

```js
npm run dev
```

## Notas adicionales
- Asegúrate de tener una base de datos MySQL configurada y funcionando correctamente antes de ejecutar el proyecto.

## ¡Disfruta explorando tu API de parqueadero! 🚀
