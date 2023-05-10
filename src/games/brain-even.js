import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (index) => index % 2 === 0;
const getTask = () => {
  const index = getRandomNumber(0, 50);
  const correctAnswer = isEven(index) ? 'yes' : 'no';
  const result = index;
  return [String(result), String(correctAnswer)];
};

const runEven = () => basisProgram(headQuestion, getTask);

export default runEven;
