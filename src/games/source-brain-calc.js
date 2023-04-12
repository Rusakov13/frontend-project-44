#!/usr/bin/env node

import allGames from '../index.js';

const array = [];
for (let i = 0; i <= 50; i += 1) {
  array.push(i);
}

const headQuestion = 'What is the result of the expression?';

const task = () => {
  const operators = ['+', '-', '*'];
  const operatorsIndex = Math.floor(Math.random() * operators.length);
  const firstNumber = Math.floor(Math.random() * array.length);
  const secondNumber = Math.floor(Math.random() * array.length);
  const result = `${firstNumber} ${operators[operatorsIndex]} ${secondNumber}`;

  let correctAnswer = 0;
  if (operators[operatorsIndex] === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operators[operatorsIndex] === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else if (operators[operatorsIndex] === '*') {
    correctAnswer = firstNumber * secondNumber;
  }

  return [result, correctAnswer];
};

const calcGame = () => allGames(headQuestion, task);

export default calcGame;
