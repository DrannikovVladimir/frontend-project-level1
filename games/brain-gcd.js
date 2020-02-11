import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 100;
const QUESTION = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const expressionStr = `${firstNumber} ${secondNumber}`;
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

  return [expressionStr, rest];
};

export { QUESTION, getGcd };
