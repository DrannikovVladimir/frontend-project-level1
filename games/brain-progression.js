import getRandomNumber from '../util/util.js';

const QUESTION = 'What number is missing in the progression?';
const MAX_NUMBER_OF_PROGRESSION = 200;
const MAX_NUMBER_OF_STEP = 20;
const PROGRESSION_SIZE = 10;

const getProgression = () => {
  const progression = [];
  const firstItem = getRandomNumber(MAX_NUMBER_OF_PROGRESSION);
  const step = getRandomNumber(MAX_NUMBER_OF_STEP);
  let count = 0;
  for (let i = 0; i < PROGRESSION_SIZE; i += 1) {
    progression[i] = firstItem + count;
    count += step;
  }
  const randomIndex = getRandomNumber(PROGRESSION_SIZE);
  const randomItem = progression[randomIndex];
  progression[randomIndex] = '..';
  const expressionStr = progression.join(' ');

  return [expressionStr, randomItem];
};

export { QUESTION, getProgression };
