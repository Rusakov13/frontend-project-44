import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'What number is missing in the progression?';

const getTask = () => {
  const finalProgression = [];
  const createArray = () => {
    const progressionSize = getRandomNumber(5, 10);
    const progressionNumber = getRandomNumber(1, 10);
    let firstElementProgress = getRandomNumber(0, 50);

    for (let i = 1; i <= progressionSize; i += 1) {
      firstElementProgress += progressionNumber;
      finalProgression.push(firstElementProgress);
    }
    return finalProgression;
  };

  const index = getRandomNumber(0, 9);
  const progression = createArray();
  const correctAnswer = progression[index];
  progression[index] = '..';
  const result = finalProgression.join(' ');

  return [String(result), String(correctAnswer)];
};

const runArithmeticProgressionGame = () => basisProgram(headQuestion, getTask);

export default runArithmeticProgressionGame;
