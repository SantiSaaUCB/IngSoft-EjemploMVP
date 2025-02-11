import sumar from "./sumador";
import multiplicar from "./multiplicador";

const firstS = document.querySelector("#primer-numeroS");
const secondS = document.querySelector("#segundo-numeroS");
const firstM = document.querySelector("#primer-numeroM");
const secondM = document.querySelector("#segundo-numeroM");
const formS = document.querySelector("#sumar-form");
const formM = document.querySelector('#multiplicar-form')
const divS = document.querySelector("#resultado-divS");
const divM = document.querySelector("#resultado-divM")

formS.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstS.value);
  const secondNumber = Number.parseInt(secondS.value);

  divS.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formM.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstM.value);
  const secondNumber = Number.parseInt(secondM.value);

  divM.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});