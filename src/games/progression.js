import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNum from '../helpers/randomNumber';

export default () => {
  const mission = 'What number is missing in this progression?';
  const getQuestionAndAnswer = () => {
    let firstNumber = getRandomNum(1, 50);
    const interval = getRandomNum(2, 10);
    const numArr = [firstNumber];
    for (let i = 1; i < 10; i += 1) {
      numArr.push(firstNumber += interval);
    }
    const missingNumIndex = getRandomNum(1, 9);
    const correctAnswer = numArr[missingNumIndex];
    numArr[missingNumIndex] = '..';
    const question = numArr.join(' ');
    return cons(question, correctAnswer);
  };
  makeGame(mission, getQuestionAndAnswer);
};
