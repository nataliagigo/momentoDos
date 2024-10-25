import { buscarUsuario } from "../../../controller/controllerUsuarios.js";

document.getElementById("btnIniciar").addEventListener("click", iniciarSesion);
let contador = 0
function iniciarSesion(){
        // if(buscarUsuario()){  
        //     if(contador <= 3){
        //         window.location.href = '/view/pages/home.html' //redireccionar
        //     }else{
        //         return
        //     }  
        // } else {
        //     contador ++
        //     console.log('Error de credenciales')
        //     console.log('numero de intentos: ' + contador)
        // }


        if(!buscarUsuario()){  
            contador ++
            console.log('Error de credenciales')
            console.log('numero de intentos: ' + contador)
            if(contador >= 3){
                window.location.href = '/view/pages/error.html'
                throw new Error('Numero máximo de intentos permitidos')
            }
        } else {
            if(contador <= 3){
                window.location.href = '/view/pages/home.html' //redireccionar
            } 
        }
    }