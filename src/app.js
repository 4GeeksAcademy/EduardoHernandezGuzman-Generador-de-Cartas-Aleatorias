import "bootstrap";
import "./style.css";

const palos = ["corazon", "diamante", "pica", "trebol"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let paloArriba = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let paloAbajo = document.querySelector("#simboloAbajo");

function eleccionCarta(arr1, arr2) {
  let carta = [];
  carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
  carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return carta;
}
function asignarColor(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    paloArriba.style.color = "#ec042d";
    numero.style.color = "#ec042d";
    paloAbajo.style.color = "#ec042d";
  } else {
    paloArriba.style.color = "#0a151f";
    numero.style.color = "#0a151f";
    paloAbajo.style.color = "#0a151f";
  }
}
function asignarPalo(arr) {
  if (arr[0] === "corazon") {
    paloArriba.innerHTML = "♥";
    paloAbajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    paloArriba.innerHTML = "♦";
    paloAbajo.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    paloArriba.innerHTML = "♣";
    paloAbajo.innerHTML = "♣";
  } else {
    paloArriba.innerHTML = "♠";
    paloAbajo.innerHTML = "♠";
  }
}
function asignarValor(arr) {
  numero.innerHTML = arr[1];
}
function generacionCarta() {
  let carta = eleccionCarta(palos, valores);
  asignarColor(carta);
  asignarPalo(carta);
  asignarValor(carta);
}

window.onload = function() {
  generacionCarta();
};
document.querySelector(".boton").addEventListener("click", generacionCarta);
