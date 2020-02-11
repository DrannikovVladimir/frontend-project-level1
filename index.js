import readlineSync from 'readline-sync';

const gameFlow = (gameQuestion, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  let count = 1;
  let isCorrect = true;
  while (count < 4 && isCorrect) {
    const [strExpression, correctAnswer] = game();
    console.log(`Question: ${strExpression}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
      if (count > 3) {
        console.log(`Congratulation, ${userName}`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
      isCorrect = false;
    }
  }
};

export default gameFlow;
