import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  const firstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${firstNumber} ${secondNumber}`;
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  let maxNumber;
  let minNumber;
  if (firstNumber > secondNumber) {
    maxNumber = firstNumber;
    minNumber = secondNumber;
  } else {
    maxNumber = secondNumber;
    minNumber = firstNumber;
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
  const answer = rest;

  return [question, answer];
};

const gameGcd = () => {
  gameFlow(GAME_DESCRIPTION, getGcd);
};

export default gameGcd;
