import assert from 'assert';
import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 1000;
const MIN_NUMBER = 1;
const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

assert.equal(isEven(2), true);
assert.equal(isEven(4), true);
assert.equal(isEven(8), true);
assert.equal(isEven(1), false);
assert.equal(isEven(17), false);

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = randomNumber;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const gameEven = () => {
  gameFlow(GAME_DESCRIPTION, getQuestionAndAnswer);
};

export default gameEven;
