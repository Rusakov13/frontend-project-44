import basisProgram from '../index.js';
import getRandomNumber from '../utils.js';

const headQuestion = 'What is the result of the expression?';

const calculate = (firstNumber, operatorsIndex, secondNumber) => {
  switch (operatorsIndex) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Error!';
  }
};

const getTask = () => {
  const operators = ['+', '-', '*'];
  const operatorsIndex = operators[getRandomNumber(0, 2)];
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const result = `${firstNumber} ${operatorsIndex} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, operatorsIndex, secondNumber);
  return [String(result), String(correctAnswer)];
};

const runCalculatorGame = () => basisProgram(headQuestion, getTask);

export default runCalculatorGame;
