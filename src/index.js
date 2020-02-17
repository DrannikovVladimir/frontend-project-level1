import readlineSync from 'readline-sync';

const MAX_COUNT = 3;

const playGame = (gameQuestion, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  for (let i = 0; i < MAX_COUNT; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === answer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  console.log(`Congratulation, ${userName}`);
};

export default playGame;
