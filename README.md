# Proyecto CRUD con MongoDB

## Descripción
Este proyecto consiste en la implementación de un sistema CRUD (Crear, Leer, Actualizar, Eliminar)
utilizando MongoDB como base de datos. El sistema permite la gestión de productos, usuarios y categorías,
con rutas CRUD para cada una de estas entidades. Además, se implementa autenticación de usuarios con JWT y encriptación de contraseñas.

## Tecnologías Utilizadas
JavaScript (con Node.js y Express)
TypeScript (con Node.js y Express)
MongoDB
Mongoose
bcrypt
JSON Web Tokens (JWT)
dotenvnv 
## Funcionalidad
Gestión de Productos: Agrega productos para jugadores de cestoball,como remeras de la seleccion Argentina,tops,zapatillas ,entre otros. Gestión de Usuarios: Regístrate como usuario y accede para administrar tu perfil y tus compras. Gestión de Categorías: Organiza los productos en categorías. Autenticación de Usuarios: Mantén tus datos seguros con un sistema de inicio de sesión utilizando JWT.
## Instalación y Ejecución
1. Clona este repositorio:

git clone https://github.com/giuligorrini/Tp-crud-mongoDB.git

2. Instala las dependencias:
cd proyecto-crud-mongodb
npm install

3. Crea un archivo `.env` en el directorio raíz y configura las variables de entorno necesarias (puerto de conexión, credenciales de base de datos, clave secreta para JWT, etc.).

4. Ejecuta la aplicación:
```
npm start
```

## Uso
Una vez que la aplicación esté en funcionamiento, puedes acceder a las diferentes rutas CRUD utilizando herramientas. Asegúrate de leer la documentación de la API para comprender cómo interactuar con cada entidad.
