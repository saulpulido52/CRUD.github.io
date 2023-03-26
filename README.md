[TOC]

# Aplicación CRUD en JavaScript usando LocalStorage

- Se creo una aplicación CRUD básica usando JavaScript y la base de datos LocalStorage. LocalStorage es una forma de almacenamiento de datos en el navegador del cliente, lo que significa que los datos se almacenan en la máquina del usuario y no en un servidor externo.



### Paso 1: Crear el esqueleto de la aplicación
- Para comenzar, crearemos la estructura básica de nuestra aplicación. Crearemos un archivo HTML, un archivo CSS y un archivo JavaScript.

- Para nuestro archivo HTML, crearemos un contenedor donde se mostrarán los registros y un formulario para agregar o editar registros.

### Paso 2: Almacenar registros en LocalStorage
- En nuestro archivo JavaScript, primero declararemos una variable llamada registros que será un array vacío. Luego, agregaremos una función llamada agregarRegistro() que obtendrá los datos del formulario y los agregará al array registros. Finalmente, usaremos la función localStorage.setItem() para almacenar el array registros en LocalStorage.


