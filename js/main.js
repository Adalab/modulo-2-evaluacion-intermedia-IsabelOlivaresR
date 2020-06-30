'use strict';

//SELECTORS
const enterNumber = document.querySelector('.js-enter-number');
const tryButton = document.querySelector('.js-try-button');
const hint = document.querySelector('.js-hint');
const attempsBox = document.querySelector('.js-attemps');
let attemps = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

/*function getEnterNumber() {
  dataNumber.number = enterNumber.value;
}
console.log(dataNumber.number);*/

function handlerCalculation() {
  //getEnterNumber();
  const inputValue = enterNumber.value;

  if (inputValue > randomNumber) {
    hint.innerHTML = 'Demasiado alto.';
    /*let attemps = attemps + 1;
    attempsBox.innerHTML = `Número de intentos: ${attemps}`;*/
  } else if (inputValue < randomNumber) {
    hint.innerHTML = 'Demasiado bajo';
    /*let attemps = attemps + 1;
    attempsBox.innerHTML = `Número de intentos: ${attemps}`;*/
  } else if (inputValue == randomNumber) {
    hint.innerHTML = 'Has ganado campeona!!!';
  } else if (inputValue > 100) {
    ('El número debe estar entre 1 y 100.');
    /*/let attemps = attemps + 1;
    attempsBox.innerHTML = `Número de intentos: ${attemps}`;*/
  } else if (inputValue < 1) {
    ('El número debe estar entre 1 y 100.');
    /*let attemps = attemps + 1;
    attempsBox.innerHTML = `Número de intentos: ${attemps}`;*/
  }
}

//window.addEventListener('load', getRandomNumber);
//enterNumber.addEventListener('keyup', getEnterNumber);
tryButton.addEventListener('click', handlerCalculation);
