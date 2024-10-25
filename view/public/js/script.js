import { buscarUsuario } from "../../../controller/controllerUsuarios.js";

document.getElementById("btnIniciar").addEventListener("click", iniciarSesion);

function iniciarSesion(){
  if(buscarUsuario()){
    window.location.href = '/view/pages/home.html' //redireccionar
  } else {
    console.log('Error de credenciales')
  }
}