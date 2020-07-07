'use strict';

//SELECTORS
const enterNumber = document.querySelector('.js-enter-number');
const tryButton = document.querySelector('.js-try-button');
const hint = document.querySelector('.js-hint');
const attempsBox = document.querySelector('.js-attemps');
let attemps = 0;

//Choose random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Comparing rules
function compareNumbers() {
  const inputValue = enterNumber.value;

  if (inputValue > 100 || inputValue < 1) {
    hint.innerHTML = 'El número debe estar entre 1 y 100.';
  } else if (inputValue > randomNumber) {
    hint.innerHTML = 'Demasiado alto.';
  } else if (inputValue < randomNumber) {
    hint.innerHTML = 'Demasiado bajo';
  } else if (parseInt(inputValue) === randomNumber) {
    hint.innerHTML = 'Has ganado campeona!!!';
  }
}

//Attemps counter
function setAttemps() {
  attemps = attemps + 1;
  attempsBox.innerHTML = `Número de intentos: ${attemps}`;
}

function handlerCalculation() {
  compareNumbers();
  setAttemps();
}

//Listeners
tryButton.addEventListener('click', handlerCalculation);
