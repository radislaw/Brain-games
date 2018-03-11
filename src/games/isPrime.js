import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'Answer "yes" if number is prime otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const randomNum = getRandomNum();
    const question = `Is this number prime? ${randomNum}`;
    const isPrime = (n) => {
      if (n < 2) {
        return false;
      }
      for (let i = 2; i <= n / 2; i += 1) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  makeGame(mission, getQuestionAndAnswer);
};
