import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'Balance the given number.\n';
  const getQuestionAndAnswer = () => {
    const randomNum = getRandomNum(1, 9999);
    const findUnbalancedNum = (num) => {
      const numArr = num.toString().split('').map(Number);
      const min = Math.min(...numArr);
      const max = Math.max(...numArr);
      if (max - min > 1) {
        return num;
      }
      return findUnbalancedNum(getRandomNum(1, 9999));
    };
    const question = findUnbalancedNum(randomNum);
    const correctAnswer = (num) => {
      const numArr = num.toString().split('').map(Number);
      const sortedNumArr = numArr.sort();
      if (sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0] <= 1) {
        return +sortedNumArr.join('');
      }
      sortedNumArr[0] += 1;
      sortedNumArr[sortedNumArr.length - 1] -= 1;

      return correctAnswer(+sortedNumArr.join(''));
    };
    return cons(question, correctAnswer(question));
  };
  makeGame(mission, getQuestionAndAnswer);
};
