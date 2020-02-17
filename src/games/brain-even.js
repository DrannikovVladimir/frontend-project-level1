import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 1000;
const MIN_NUMBER = 1;
const QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const str = `${randomNumber}`;
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [str, isEven];
};

const gameEven = () => {
  gameFlow(QUESTION, getEven);
};

export default gameEven;
