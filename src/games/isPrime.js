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
      const iter = (counter, acc) => {
        if (acc > Math.sqrt(counter)) {
          return true;
        }
        if (counter % acc === 0) {
          return false;
        }
        return iter(counter, acc + 1);
      };
      return iter(n, 2);
    };
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  makeGame(mission, getQuestionAndAnswer);
};
