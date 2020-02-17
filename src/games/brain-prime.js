import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const COUNT_START = 2;

const getPrime = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let isPrime = 'yes';
  for (let i = COUNT_START; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      isPrime = 'no';
      break;
    }
  }

  return [randomNumber, isPrime];
};

const gamePrime = () => {
  gameFlow(QUESTION, getPrime);
};

export default gamePrime;
