#!/usr/bin/env node

import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const limit = 50;

const array = [];
for (let i = 0; i <= limit; i += 1) {
  array.push(i);
}

const headQuestion = 'Find the greatest common divisor of given numbers.';

const task = () => {
  const firstNumber = getRandomNumber(0, 50);
  const secondNumber = getRandomNumber(0, 50);
  let correctAnswer = 0;
  const result = `${firstNumber} ${secondNumber}`;

  for (let i = 1; i < limit; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  return [result, correctAnswer];
};

const greatCommoDivisorGame = () => basisProgram(headQuestion, task);

export default greatCommoDivisorGame;
