import readlineSync from 'readline-sync';
import getRandomNum from './helpers/randomNumber';

const GAME_COUNT = 3;

export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = greetUser();
  const checkAnswer = (times = GAME_COUNT) => {
    if (!times) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const randomNum = getRandomNum();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer. \n Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      checkAnswer(times - 1);
    }
  };
  checkAnswer();
};

