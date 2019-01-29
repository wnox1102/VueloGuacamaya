# VueloGuacamaya
// Es una aplicacion web usando las herramientas de NodeJS , ExpressJS , Pug y Mysql Server

// Para correr el proyecto deben escribir el comando npm install, ya que de esta manera instalara toda las dependencias
// que necesite la app

// npm install 

// Lo siguiente a eso es configurar nuestro archivo variables.env de tal manera que lea la base de datos que estan usando en el momento
// Ejemplo:

NODE_ENV= development
PORT= PORT_USE
SECRET= SECRECT_PASSWORD
KEY= KEY_DATABASE
DATABASE= DATABASE_NAME
DB_USER= USER
DB_PASSWORD= PASSWORD

// Ya cuando se hayan modificado las variables.env ejecutamos el comando npm start

// npm start

// Ya ejecutado el comando npm start el proyecto comenzara a correr el puerto que le hayan especificado.

// En caso de error por protocol client 
// Aplicar comando dentro de Mysql ALTER USER 'YOUR_USER'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';

