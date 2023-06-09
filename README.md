# Music Info Library

# Contributors

- Luis Bazan Rios

## Get starting
1. Clonar el repositorio
2. Construir el proyecto con maven con la configuracion `clean` y `install`
3. Ejecutar el archivo `.jar` generado en la carpeta target, con el comando `java -jar ./MusicInfoLibrary-1.0-SNAPSHOT.jar -r ./music-directory`
4. Para el cliente, hay que entrar a la carpeta `client/` y tener Nodejs instalado
5. Instalar las librerias del cliente `npm install`
6. Para ejecutar un servidor de desarrolo con la interfaz se usa `npm start`
7. Para construir la interfaz de react se usa `npm build`

## To Do's

### Server

- [x] Listar archivos en el directorio de almacenamiento.
- [x] Crear un objeto SongData para cada archivo en el directorio.
- [x] Hacer que registre bien los autores y la duracion del archivo mp3.
- [x] Hacer que la api devuelva jsons para las canciones que tenga listadas (/api/list)
- [x] Exponer una ruta con la carpeta que almacena los archivos mp3 (/api/song?name=fileNameHere)
- [x] Exponer una ruta con las imagenes de los archivos almacenados (/api/image?id=imageId)
- [x] Arreglar un bug, cuando el nombre del archivo contiene un "+" en el nombre servidor responde como si no existiera
- [x] Agregar una forma de especificar el directorio donde estan almacenados los archivos al momento de ejecutar el servidor
- [x] Exponer una ruta para que el cliente pueda validar la api

### Client

- [x] Preparar el entorno de desarrollo de la app
- [x] Instalar dependencias, tailwindcss, icons, react etc.
- [x] Hacer los contextos de react para poder reproducir la musica
- [x] Historial de reproduccion para poder usar el modo aleatorio correctamente
- [x] Hacer el panel de reproduccion
  - [x] Que muestre la data de la cancion que se esta reproduciendo
  - [x] Una linea de tiempo con la cual se pueda interactuar para adelantar o retroceder la cancion
  - [x] Botones de control de la musica (prev, next, random, loop)
- [x] Hacer el panel que listara las canciones
  - [x] Mostrar la informacion basica de las canciones (title, duration, authors)
  - [x] Enumerar las canciones d el #1 al numero total
  - [x] Poder dar click en alguna y que se reproduzca
- [x] Cuando se acabe la cancion se reproduzca la siguiente cancion
- [ ] Poder usar las flechas del teclado para poder pasar o retroceder una cancion
- [ ] Poder configurar un backend personalizado
- [ ] Panel de configuracion del backend