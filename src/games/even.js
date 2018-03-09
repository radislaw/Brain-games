import { cons } from 'hexlet-pairs';
import makeGame from '../makeGame';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'Answer "yes" if number even otherwise answer "no".\n';
  const getQuestionAndAnswer = () => {
    const randomNum = getRandomNum();
    const question = randomNum;
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  makeGame(mission, getQuestionAndAnswer);
};
