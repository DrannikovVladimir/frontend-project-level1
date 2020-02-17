import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const QUESTION = 'What is the result of the expression?';
const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const OPERATORS = ['+', '-', '*'];

const countExpression = () => {
  const randomOperator = OPERATORS[getRandomNumber(0, 2)];
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  let answer;
  switch (randomOperator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      answer = null;
  }

  return [question, answer];
};

const gameCalc = () => {
  gameFlow(QUESTION, countExpression);
};

export default gameCalc;
