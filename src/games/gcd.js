import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'Find the greatest common divisor of given numbers.\n';
  const getQuestionAndAnswer = () => {
    const randomNum1 = getRandomNum(0, 20);
    const randomNum2 = getRandomNum(0, 20);
    const question = `${randomNum1} ${randomNum2}`;
    const correctAnswer = (n1, n2) => {
      if (n2 > 0) {
        return correctAnswer(n2, n1 % n2);
      }
      return n1;
    };
    return cons(question, correctAnswer(randomNum1, randomNum2));
  };
  makeGame(mission, getQuestionAndAnswer);
};
