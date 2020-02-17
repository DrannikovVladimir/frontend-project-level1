import readlineSync from 'readline-sync';

const MAX_COUNT = 3;

const playGame = (gameQuestion, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  for (let i = 1; i <= MAX_COUNT; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === answer.toString()) {
      console.log('Correct!');
      if (i === MAX_COUNT) {
        console.log(`Congratulation, ${userName}`);
      }
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
};

export default playGame;
