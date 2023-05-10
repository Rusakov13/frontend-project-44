import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (Math.abs(number1) > Math.abs(number2)) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const getTask = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const result = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);

  return [String(result), String(correctAnswer)];
};

const runGreatCommoDivisorGame = () => basisProgram(headQuestion, getTask);

export default runGreatCommoDivisorGame;
