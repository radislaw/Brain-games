import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'What is the result of the expression?.';
  const getQuestionAndAnswer = () => {
    const randomNum1 = getRandomNum(0, 20);
    const randomNum2 = getRandomNum(0, 20);
    const signs = ['+', '-', '*'];
    const signIndex = [getRandomNum(0, signs.length - 1)];
    const sign = signs[signIndex];
    const question = `${randomNum1} ${sign} ${randomNum2}`;
    let correctAnswer = 0;
    switch (sign) {
      case '+':
        correctAnswer = randomNum1 + randomNum2;
        break;
      case '-':
        correctAnswer = randomNum1 - randomNum2;
        break;
      case '*':
        correctAnswer = randomNum1 * randomNum2;
        break;
      default:
        correctAnswer = 0;
    }
    return cons(question, correctAnswer);
  };
  makeGame(mission, getQuestionAndAnswer);
};
