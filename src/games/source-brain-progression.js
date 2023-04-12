#!/usr/bin/env node

import allGames from "../index.js";

const array = [];
for (let i = 1; i <= 100; i += 1) {
  array.push(i);
}

const arraySize = [];
for (let i = 5; i <= 10; i += 1) {
  arraySize.push(i);
}

const arrayNumber = [];
for (let i = 1; i <= 10; i += 1) {
  arrayNumber.push(i);
}

const headQuestion = "What number is missing in the progression?";

const task = () => {
  let progressionSize = Math.floor(Math.random() * arraySize.length + 5);
  let progressionNumber = Math.floor(Math.random() * arrayNumber.length);
  if (progressionNumber === 0) {
    progressionNumber = Math.floor(Math.random() * arrayNumber.length);
  }
  let firstElementProgress = Math.floor(Math.random() * array.length);
  if (firstElementProgress > 50) {
    firstElementProgress = firstElementProgress - 50;
  }

  const finalProgression = [];
  for (let i = 1; i <= progressionSize; i += 1) {
    firstElementProgress += progressionNumber;
    finalProgression.push(firstElementProgress);
  }

  const index = Math.floor(Math.random() * finalProgression.length);
  const correctAnswer = finalProgression[index];
  finalProgression[index] = "..";
  const result = finalProgression.join(" ");

  return [result, correctAnswer];
};

const progressionGame = () => allGames(headQuestion, task);

export default progressionGame;
