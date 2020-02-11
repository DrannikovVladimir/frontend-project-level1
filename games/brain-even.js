import getRandomNumber from '../util/util.js';

const MAX_NUMBER = 1000;
const QUESTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = () => {
  const randomNumber = getRandomNumber(MAX_NUMBER);
  const str = `${randomNumber}`;
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [str, isEven];
};

export { QUESTION, getEven };
