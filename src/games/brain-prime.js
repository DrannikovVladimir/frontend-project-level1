import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_COUNT = 2;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = START_COUNT; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrime = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = randomNumber;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const gamePrime = () => {
  gameFlow(GAME_DESCRIPTION, getPrime);
};

export { gamePrime, isPrime };
