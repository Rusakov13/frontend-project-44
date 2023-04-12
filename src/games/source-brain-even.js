#!/usr/bin/env node

import allGames from "../index.js";

const limit = 50;

const array = [];
for (let i = 0; i <= 50; i += 1) {
  array.push(i);
}

const headQuestion =
  'Answer "yes" if the result is even, otherwise answer "no".';

const task = () => {
  const index = Math.floor(Math.random() * array.length);
  const isEven = array[index] % 2 === 0 ? "yes" : "no";
  const result = array[index];
  const correctAnswer = isEven;
  return [result, correctAnswer];
};

const evenGame = () => allGames(headQuestion, task);

export default evenGame;
