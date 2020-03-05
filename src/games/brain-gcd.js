import assert from 'assert';
import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === b) {
    return a;
  }
  let maxNumber;
  let minNumber;
  if (a > b) {
    maxNumber = a;
    minNumber = b;
  } else {
    maxNumber = b;
    minNumber = a;
  }
  let rest;
  let flag = true;
  while (flag) {
    if (maxNumber % minNumber === 0) {
      rest = minNumber;
      flag = false;
    } else {
      rest = maxNumber % minNumber;
      maxNumber = minNumber;
      minNumber = rest;
    }
  }
  return rest;
};

assert.equal(getGcd(99, 11), 11);
assert.equal(getGcd(250, 75), 25);
assert.equal(getGcd(583, 12), 1);

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);

  return [question, answer];
};

const gameGcd = () => {
  gameFlow(GAME_DESCRIPTION, getQuestionAndAnswer);
};

export default gameGcd;
