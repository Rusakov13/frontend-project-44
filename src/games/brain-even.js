#!/usr/bin/env node

import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const limit = 50;

const array = [];
for (let i = 0; i <= limit; i += 1) {
  array.push(i);
}

const headQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = () => {
  const index = getRandomNumber(0, 50);
  const isEven = array[index] % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  const result = array[index];
  return [result, correctAnswer];
};

const evenGame = () => basisProgram(headQuestion, task);

export default evenGame;
