## Para ejecutar este proyecto en react se debe seguir los siguientes comandos en terminal

### Primero se debe hacer el setup con la base de datos
En el proyecto se puede encontrar un archivo .env.example, se debe completar las siguientes
variables para conectarlo a su base de datos:

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5433
DB_DATABASE=cuida_tu_comunidad
DB_USERNAME=root
DB_PASSWORD=

### Para ejecutar las migraciones y tener las tablas necesarias.
* ``` php artisan migrate ```


### Para ejecutar seed para poblar la base de datos con entradas necesarias.
* ``` php artisan db:seed ```

En mi caso estoy utilizando Xampp para tener mi servidor apache y tener el proyecto (API)
disponible, puedes usar el programa de tu preferencia.