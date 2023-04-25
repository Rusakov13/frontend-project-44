#!/usr/bin/env node

import readlineSync from 'readline-sync';

const basisProgram = (headQuestion, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(headQuestion);
  const questionСounter = 3;
  for (let i = 0; i < questionСounter; i += 1) {
    let [result, correctAnswer] = task();
    result = String(result);
    correctAnswer = String(correctAnswer);

    const myAnswer = readlineSync.question(`Question: ${result} \nAnswer: `);

    if (myAnswer !== correctAnswer) {
      console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default basisProgram;
