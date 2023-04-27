import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'What number is missing in the progression?';

const getTask = () => {
  const progressionSize = getRandomNumber(5, 10);
  let progressionNumber = getRandomNumber(0, 10);
  if (progressionNumber === 0) {
    progressionNumber = getRandomNumber(0, 10);
  }
  let firstElementProgress = getRandomNumber();
  if (firstElementProgress > 50) {
    firstElementProgress -= 50;
  }

  const finalProgression = [];
  for (let i = 1; i <= progressionSize; i += 1) {
    firstElementProgress += progressionNumber;
    finalProgression.push(firstElementProgress);
  }

  const index = Math.floor(Math.random() * finalProgression.length);
  const correctAnswer = finalProgression[index];
  finalProgression[index] = '..';
  const result = finalProgression.join(' ');

  return [result, correctAnswer];
};

const arithmeticProgressionGame = () => basisProgram(headQuestion, getTask);

export default arithmeticProgressionGame;
