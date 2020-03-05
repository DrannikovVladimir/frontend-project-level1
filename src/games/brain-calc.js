import assert from 'assert';
import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const OPERATORS = ['+', '-', '*'];

const countExpression = (a, b, flag) => {
  let answer;
  switch (flag) {
    case '+':
      answer = a / b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      return null;
  }
  return answer;
};

const getQuestionAndAnswer = () => {
  const randomOperator = OPERATORS[getRandomNumber(0, 2)];
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = countExpression(firstNumber, secondNumber, randomOperator);

  return [question, answer];
};

const gameCalc = () => {
  gameFlow(GAME_DESCRIPTION, getQuestionAndAnswer);
};

assert.equal(countExpression(10, 10, '+'), 20);
assert.equal(countExpression(10, 10, '-'), 0);
assert.equal(countExpression(10, 10, '*'), 100);

export default gameCalc;
