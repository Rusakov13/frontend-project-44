#!/usr/bin/env node

import readlineSync from "readline-sync";

const even = () => {
  const array = [];
  for (let i = -15; i <= 15; i += 1) {
    array.push(i);
  }
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name + "!");
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter >= 0 && counter < 3) {
    const index = Math.floor(Math.random() * array.length);
    const replacementPoint = array[index] % 2 === 0 ? true : false;

    const condition = readlineSync.question(
      "Question: " + array[index] + "\nAnswer: "
    );

    let yourAnswer;

    if (condition === "yes") {
      yourAnswer = true;
    } else if (condition === "no") {
      yourAnswer = false;
    }

    if (yourAnswer === replacementPoint) {
      console.log("Correct!");
      counter += 1;
    } else {
      console.log(
        '"yes" is wrong answer ;(. Correct answer was "no".\nLet\'s try again, ' +
          name +
          "!"
      );
      counter = -1;
    }

    if (counter === 3) {
      console.log("Congratulation, " + name + "!");
    }
  }
};

even();
