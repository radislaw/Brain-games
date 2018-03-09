import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const GAME_COUNT = 3;

export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

export default (mission, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!\n', mission);
  const userName = greetUser();
  const checkAnswer = (times = GAME_COUNT) => {
    if (!times) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const correctAnswer = cdr(questionAndAnswer);
    const answer = readlineSync.question('Your answer: ');
    if (`${correctAnswer}` !== answer) {
      console.log(`'${answer}' is wrong answer. \n Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    } else {
      console.log('Correct!');
      checkAnswer(times - 1);
    }
  };
  checkAnswer();
};
