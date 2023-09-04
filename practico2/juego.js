// definicion de variables globales
let ganadasMaquina=0;
let ganadasUsuario=0;
//Scrip para la identificación del usuario
const button = document.querySelector("button");//busca el primer button 
button.onclick = function () { //le asigna la function() al evento click del button que pide el ingreso del nombre
  let nombreUsuario = prompt("¿Cuál es tu nombre?");
  if (nombreUsuario===''|| nombreUsuario==null) { //validación impide el ingreso de un valor vacío, también un valor nulo al cancelar la petición.
    window.alert("No ha ingresado un nombre. Inténtelo nuevamente");
  }else{ //habilita la interfaz del juego y desabilita la identificación del usuario
    document.getElementById('ordenInicio').innerHTML="¡Bienvenido "+ nombreUsuario + "! Ahora puedes escoger una opción:";
    document.getElementById("interfazJuego").style.display = "block";
    document.getElementById("identificacionUsuario").style.display = "none";
    document.getElementById("totalUsuario").innerHTML=ganadasUsuario;
    document.getElementById("totalMaquina").innerHTML=ganadasMaquina;
  }
}
//Asigna la opción elegida a la variable opcionUsuario y muestra en la interfaz la imagen correspondiente. Luego inicia el juego()
function eleccionUsuario(opcionElegida) { 
  if (opcionElegida==0) {
      document.getElementById("imagenUsuario").src="imagenes/piedra.jpg";
      opcionUsuario=0;
  }
  if (opcionElegida==1) {
    document.getElementById("imagenUsuario").src="imagenes/papel.jpg";
    opcionUsuario=1;
  }
  if (opcionElegida==2) {
    document.getElementById("imagenUsuario").src="imagenes/tijera.jpg";
    opcionUsuario=2;
  }
  juego() 
}
//inicia con la eleccion de la máquina, luego compara las opciones, muestra el score en la página web y determina el ganador
function juego(){ 
  eleccionMaquina()
  comparaOpciones(opcionUsuario, opcionMaquina)
  document.getElementById("totalUsuario").innerHTML=ganadasUsuario;
  document.getElementById("totalMaquina").innerHTML=ganadasMaquina;
  if(ganadasMaquina==3||ganadasUsuario==3) {
    document.getElementById("opcionesJuego").style.display = "none";
    document.getElementById("opcionesElegidas").style.display = "none";
    if (ganadasMaquina>ganadasUsuario){
      document.getElementById("resultadoFinal").innerHTML="¡HAS SIDO DERROTADO!";
    }else{
      document.getElementById("resultadoFinal").innerHTML="¡HAS TRIUNFADO!";
    }
    document.getElementById("reinicio").style.display = "block"
 }
}
//asigna la opcionMaquina de forma aleatoria y muestra en la página web
function eleccionMaquina() { 
  opcionMaquina=Math.floor(Math.random() * 3);
  if (opcionMaquina==0) {
    document.getElementById("imagenMaquina").src="imagenes/piedra.jpg";
  }
  if (opcionMaquina==1) {
    document.getElementById("imagenMaquina").src="imagenes/papel.jpg";
  }
  if (opcionMaquina==2) {
    document.getElementById("imagenMaquina").src="imagenes/tijera.jpg";
  }
}
//compara las opciones del usuario y la maquina, determina el ganador y muestra el resultado en la página web
function comparaOpciones(opcionUsuario, opcionMaquina){ 
  console.log("YO"+opcionUsuario);
  console.log("PC"+opcionMaquina);
  if (opcionUsuario==opcionMaquina) {
  document.getElementById("resultado").innerHTML="¡EMPATE!";
  }else{
    switch(opcionUsuario) {
    case 0:
      if(opcionMaquina==1) {
        document.getElementById("resultado").innerHTML="¡PERDISTE!";
        console.log("perdiste");
        ++ganadasMaquina;
      }else {
          document.getElementById("resultado").innerHTML="¡GANASTE!";
          ++ganadasUsuario;
      }
      break;
    case 1:
      if(opcionMaquina==0) {
        document.getElementById("resultado").innerHTML="¡GANASTE!";
        ++ganadasUsuario;
      }else {
        document.getElementById("resultado").innerHTML="¡PERDISTE!";
        console.log("perdiste");
        ++ganadasMaquina;
      }
      break;
    case 2:
      if(opcionMaquina=0) {
        document.getElementById("resultado").innerHTML="¡PERDISTE!";
        console.log("perdiste");
        ++ganadasMaquina;
      }else {
        document.getElementById("resultado").innerHTML="¡GANASTE!";
        ++ganadasUsuario;
      }
      break;
    }
  }
}