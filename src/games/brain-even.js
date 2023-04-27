import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const index = getRandomNumber(0, 50);
  const isEven = index % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  const result = index;
  return [result, correctAnswer];
};

const evenOrOddGame = () => basisProgram(headQuestion, getTask);

export default evenOrOddGame;
