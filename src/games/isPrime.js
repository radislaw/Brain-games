import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'Answer "yes" if number is prime otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const randomNum = getRandomNum();
    const question = `Is this number prime? ${randomNum}`;
    const correctAnswer = (n) => {
      if (n < 2) {
        return 'no';
      }
      for (let i = 2; i <= n / 2; i += 1) {
        if (n % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    return cons(question, correctAnswer(randomNum));
  };
  makeGame(mission, getQuestionAndAnswer);
};
