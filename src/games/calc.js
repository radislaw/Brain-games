import readlineSync from 'readline-sync';
import getRandomNum from '../helpers/randomNumber';

const GAME_COUNT = 3;

export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?.\n');
  const userName = greetUser();
  const checkAnswer = (times = GAME_COUNT) => {
    if (!times) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const randomNum1 = getRandomNum(0, 10);
    const randomNum2 = getRandomNum(0, 10);
    const sign = ['+', '-', '*'][getRandomNum(0, 2)];
    console.log(`Question: ${randomNum1} ${sign} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer = 0;
    switch (sign) {
      case '+': correctAnswer = randomNum1 + randomNum2;
        break;
      case '-': correctAnswer = randomNum1 - randomNum2;
        break;
      case '*': correctAnswer = randomNum1 * randomNum2;
        break;
      default: correctAnswer = 0;
    }
    if (+correctAnswer !== +answer) {
      console.log(`'${answer}' is wrong answer. \n Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      checkAnswer(times - 1);
    }
  };
  checkAnswer();
};
