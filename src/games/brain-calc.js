import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const QUESTION = 'What is the result of the expression?';
const MAX_NUMBER = 100;
const OPERATORS = ['+', '-', '*'];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const countExpression = () => {
  const randomOperator = getRandomItem(OPERATORS);
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const expressionStr = `${firstNumber} ${randomOperator} ${secondNumber}`;
  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      correctAnswer = null;
  }

  return [expressionStr, correctAnswer];
};

const gameCalc = () => {
  gameFlow(QUESTION, countExpression);
};

export default gameCalc;
