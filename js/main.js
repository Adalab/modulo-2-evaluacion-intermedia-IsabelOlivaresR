'use strict';

//SELECTORS
const enterNumber = document.querySelector('.js-enter-number');
const tryButton = document.querySelector('.js-try-button');
const hint = document.querySelector('.js-hint');
const AttempsBox = document.querySelector('.js-attemps');
const dataNumber = {};
let attemps = 0;

function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}
console.log(randomNumber);

function getEnterNumber() {
  dataNumber.number = enterNumber.value;
}
console.log(dataNumber.number);

function handlerCalculation() {
  getEnterNumber();
  if (dataNumber.number > randomNumber) {
    hint.innerHTML = 'Demasiado alto.';
    let attemps = attemps + 1;
  } else if (dataNumber.number < randomNumber) {
    hint.innerHTML = 'Demasiado bajo';
    let attemps = attemps + 1;
  } else if (dataNumber.number === randomNumber) {
    hint.innerHTML = 'Has ganado campeona!!!';
  } else if (dataNumber.number > 100) {
    ('El número debe estar entre 1 y 100.');
    let attemps = attemps + 1;
  } else if (dataNumber.number < 1) {
    ('El número debe estar entre 1 y 100.');
    let attemps = attemps + 1;
  }
}

window.addEventListener('load', getRandomNumber);
enterNumber.addEventListener('keyup', getEnterNumber);
tryButton.addEventListener('click', handlerCalculation);
