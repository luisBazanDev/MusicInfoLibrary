# Music Info Library

# Contributors

- Luis Bazan Rios

## To Do's

### Server

- [x] Listar archivos en el directorio de almacenamiento.
- [x] Crear un objeto SongData para cada archivo en el directorio.
- [x] Hacer que registre bien los autores y la duracion del archivo mp3.
- [x] Hacer que la api devuelva jsons para las canciones que tenga listadas (/api/list)
- [x] Exponer una ruta con la carpeta que almacena los archivos mp3 (/api/get?file=fileNameHere)

### Client

- [x] Preparar el entorno de desarrollo de la app
- [x] Instalar dependencias, tailwindcss, icons, react etc.
- [x] Hacer los contextos de react para poder reproducir la musica
- [ ] Historial de reproduccion para poder usar el modo aleatorio correctamente
- [ ] Hacer el panel de reproduccion
  - [ ] Que muestre la data de la cancion que se esta reproduciendo
  - [ ] Una linea de tiempo con la cual se pueda interactuar para adelantar o retroceder la cancion
  - [ ] Botones de control de la musica (prev, next, random, loop)
- [ ] Hacer el panel que listara las canciones
  - [ ] Mostrar la informacion basica de las canciones (title, duration, authors)
  - [ ] Enumerar las canciones d el #1 al numero total
  - [ ] Poder dar click en alguna y que se reproduzca
- [ ] Poder usar las flechas del teclado para poder pasar o retroceder una cancion
