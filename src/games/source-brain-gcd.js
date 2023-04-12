#!/usr/bin/env node

import allGames from "../index.js";

const limit = 50;

const array = [];
for (let i = 0; i <= 50; i += 1) {
  array.push(i);
}

const headQuestion = "Find the greatest common divisor of given numbers.";

const task = () => {
  const firstNumber = Math.floor(Math.random() * limit);
  const secondNumber = Math.floor(Math.random() * limit);
  let correctAnswer = 0;
  const result = `${firstNumber} ${secondNumber}`;

  for (let i = 1; i < limit; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      correctAnswer = i;
    }
  }
  return [result, correctAnswer];
};

const gcdGame = () => allGames(headQuestion, task);

export default gcdGame;
