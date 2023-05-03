import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getTask = () => {
  const number = getRandomNumber(0, 50);
  let counter = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }
  const isPrime = counter === 2;
  const correctAnswer = isPrime ? 'yes' : 'no';
  const result = number;
  return [String(result), String(correctAnswer)];
};
const runPrimeNumberGame = () => basisProgram(headQuestion, getTask);

export default runPrimeNumberGame;
