import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'What number is missing in the progression?';

let result = 0;
const createArray = () => {
  const finalProgression = [];
  const progressionSize = getRandomNumber(9, 10);
  const progressionStep = getRandomNumber(1, 5);
  let firstElementProgress = getRandomNumber(0, 50);
  for (let i = 1; i < progressionSize; i += 1) {
    firstElementProgress += progressionStep;
    finalProgression.push(firstElementProgress);
  }
  result = finalProgression;
  return finalProgression;
};

const getTask = () => {
  const progression = createArray();
  const index = getRandomNumber(0, progression.length);
  const correctAnswer = progression[index];
  progression[index] = '..';
  result = result.join(' ');
  return [String(result), String(correctAnswer)];
};

const runArithmeticProgressionGame = () => basisProgram(headQuestion, getTask);

export default runArithmeticProgressionGame;
