#!/usr/bin/env node

import allGames from "../index.js";

const limit = 50;

const array = [];
for (let i = 0; i <= 50; i += 1) {
  array.push(i);
}

const headQuestion =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const task = () => {
  const index = Math.floor(Math.random() * array.length);

  let counter = 0;
  for (let i = 1; i <= array[index]; i += 1) {
    if (array[index] % i === 0) {
      counter += 1;
    }
  }
  const isPrime = counter === 2 ? "yes" : "no";
  const result = array[index];
  const correctAnswer = isPrime;
  return [result, correctAnswer];
};
const primeGame = () => allGames(headQuestion, task);

export default primeGame;
