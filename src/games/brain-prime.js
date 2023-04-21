#!/usr/bin/env node

import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const limit = 50;

const array = [];
for (let i = 0; i <= limit; i += 1) {
  array.push(i);
}

const headQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const index = getRandomNumber(0, 50);

  let counter = 0;
  for (let i = 1; i <= array[index]; i += 1) {
    if (array[index] % i === 0) {
      counter += 1;
    }
  }
  const isPrime = counter === 2;
  const correctAnswer = isPrime ? 'yes' : 'no';
  const result = array[index];
  return [result, correctAnswer];
};
const primeGame = () => basisProgram(headQuestion, task);

export default primeGame;
