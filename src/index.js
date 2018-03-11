import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import chalk from 'chalk';

const GAME_COUNT = 3;
const greetingColor = '#00BCD4';
const missionColor = '#26A69A';
const questionColor = '#448AFF';
const successColor = '#00E676';
const errorColor = '#FF1744';

export const greetUser = () => {
  const userName = readlineSync.question(chalk.hex(questionColor).bold('May I have your name? '));
  console.log(chalk.hex(greetingColor).bold(`Hello ${userName}!\n`));
  return userName;
};

export default (mission, getQuestionAndAnswer) => {
  console.log(chalk.hex(greetingColor).bold('Welcome to the Brain Games!'));
  console.log(chalk.hex(missionColor).bold(`${mission}\n`));
  const userName = greetUser();
  const checkAnswer = (times = GAME_COUNT) => {
    if (!times) {
      console.log(chalk.hex(successColor).bold(`Congratulations, ${userName}!`));
      return;
    }
    const questionAndAnswer = getQuestionAndAnswer();
    console.log(chalk.hex(questionColor).bold(`Question: ${car(questionAndAnswer)}`));
    const correctAnswer = cdr(questionAndAnswer);
    const answer = readlineSync.question(chalk.hex(questionColor).bold('Your answer: '));
    if (`${correctAnswer}` !== answer) {
      console.log(chalk.hex(errorColor)
        .bold(`'${answer}' is wrong answer. \nCorrect answer was '${correctAnswer}'. Let's try again, ${userName}!`));
    } else {
      console.log(chalk.hex(successColor).bold('Correct!\n'));
      checkAnswer(times - 1);
    }
  };
  checkAnswer();
};
