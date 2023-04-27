import readlineSync from 'readline-sync';

const basisProgram = (headQuestion, getTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(headQuestion);
  const questionСounter = 3;
  for (let i = 0; i < questionСounter; i += 1) {
    const [result, correctAnswer] = getTask();

    const myAnswer = readlineSync.question(`Question: ${result} \nAnswer: `);

    if (myAnswer.toString() !== correctAnswer.toString()) {
      console.log(`'${myAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default basisProgram;
