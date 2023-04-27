import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const limit = 50;
  let correctAnswer = 0;
  const result = `${firstNumber} ${secondNumber}`;

  for (let i = 1; i < limit; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  return [result, correctAnswer];
};

const greatCommoDivisorGame = () => basisProgram(headQuestion, getTask);

export default greatCommoDivisorGame;
