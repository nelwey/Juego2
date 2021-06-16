function game(userInput) {
  machineInput = Math.floor(Math.random() * 3) + 1;
  if (userInput == machineInput) {
    console.log("Empate!");
    console.log("Tu escogiste: papel");
    console.log("La Maquina escogió: piedra");
  } else if (userInput == 1 && machineInput == 2) {
    console.log('%c La maquina gana!', "color:red");
    console.log("Tu escogiste: piedra ");
    console.log("La Maquina escogió: papel");
  } else if (userInput == 2 && machineInput == 1) {
    console.log('%c Ganaste!', 'background: #222; color: #bada55' );
    console.log("Tu escogiste: papel ");
    console.log("La Maquina escogió: piedra");
  } else if (userInput == 2 && machineInput == 3) {
    console.log('%c La maquina gana!', "color:red");
    console.log("Tu escogiste: papel");
    console.log("La Maquina escogió: tijera");
  } else if (userInput == 3 && machineInput == 2) {
    console.log('%c Ganaste!', 'background: #222; color: #bada55' );
    console.log("Tu escogiste: tijera ");
    console.log("La Maquina escogió: papel");
  } else if (userInput == 3 && machineInput == 1) {
    console.log('%c La maquina gana!', "color:red");
    console.log("Tu escogiste: tijera ");
    console.log("La Maquina escogió: piedra");
  } else if (userInput == 1 && machineInput == 3) {
    console.log('%c Ganaste!', 'background: #222; color: #bada55' );
    console.log("Tu escogiste: piedra");
    console.log("La Maquina escogió: tijera");
  }
}
function welcomeMessage() {
  console.log("Este es el juego de piedra, papel o tijera");
  console.log("===========================================");
  console.log("1. Piedra");
  console.log("2. Papel");
  console.log("3. Tijera");
  console.log("===========================================");
}
function getUserInput() {
  var userInput = 0;
  setTimeout(() => {
    do {
     userInput = prompt("Escoja un número entre 1 y 3 por favor!");
    } while (userInput > 3 || userInput < 1 || isNaN(userInput));
    game(userInput);
  }, 1000);
}
function start() {
  welcomeMessage();
  getUserInput();
}
