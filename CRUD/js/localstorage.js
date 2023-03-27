const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");

const usuarios = JSON.parse(localStorage.getItem("usuarios")  ) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");


console.log(usuarios);

const agregarUsuarios = () =>{
    const usuario = {
        id: crypto.randomUUID(),
        nombre: nombre.value,
        apellido : apellido.value
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));


    console.log(usuario);
}



function mostrarUsuarios(){
    cuerpoTabla.innerHTML = "";
    usuarios.forEach(usuario => {
        cuerpoTabla.innerHTML += `
        </tr>
        <th scope="row">${usuario.id}</th>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            
            <td> <button 
            type="button col" 
            class="btn btn-primary" 
            onclick="buscar()">Editar</button> 
            <button type="button" 
            class="col btn btn-primary" 
            onclick="eliminarUsuarios('${usuario.id}')">Eliminar</button> </td>
          </tr>
        `
        
    });
    
}
function eliminarUsuarios (id) {
  
    mostrarUsuarios();

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === id) {
      usuarios.splice(i, 1);
      break;
    }
  }

  localStorage.setItem('usuarios', JSON.stringify(usuarios));

}