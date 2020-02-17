import gameFlow from '../index.js';
import getRandomNumber from '../util/util.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';
const MAX_NUMBERS_OF_PROGRESSION = 200;
const MIN_NUMBERS_OF_PROGRESSION = 20;
const MAX_NUMBER_OF_STEP = 20;
const MIN_NUMBER_OF_STEP = 5;
const PROGRESSION_SIZE = 10;
const MAX_RANDOM_INDEX = 9;
const MIN_RANDOM_INDEX = 0;

const createProgression = () => {
  const progression = [];
  const firstItem = getRandomNumber(MIN_NUMBERS_OF_PROGRESSION, MAX_NUMBERS_OF_PROGRESSION);
  const step = getRandomNumber(MIN_NUMBER_OF_STEP, MAX_NUMBER_OF_STEP);
  for (let i = 0; i < PROGRESSION_SIZE; i += 1) {
    progression[i] = firstItem + step * i;
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = createProgression();
  const randomIndex = getRandomNumber(MIN_RANDOM_INDEX, MAX_RANDOM_INDEX);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const gameProgression = () => {
  gameFlow(GAME_DESCRIPTION, getQuestionAndAnswer);
};

export default gameProgression;
