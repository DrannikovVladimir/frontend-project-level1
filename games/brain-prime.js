import getRandomNumber from '../util/util.js';

const QUESTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MAX_NUMBER = 20;

const getPrime = () => {
  const randomNumber = getRandomNumber(MAX_NUMBER);
  let isPrime = 'yes';
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      isPrime = 'no';
      break;
    }
  }

  return [randomNumber, isPrime];
};

export { QUESTION, getPrime };