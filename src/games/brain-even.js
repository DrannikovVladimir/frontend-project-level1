import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 1000;
const MIN_NUMBER = 1;
const QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = randomNumber;
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [question.toString(), answer];
};

const gameEven = () => {
  gameFlow(QUESTION, getEven);
};

export default gameEven;
