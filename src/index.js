import readlineSync from 'readline-sync';
import getRandomNum from './helpers/randomNumber';


export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};


export const evensGame = () => {
  const randomNum = getRandomNum();
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const answer = readlineSync.question(`Question: ${randomNum} `, {
    trueValue: ['yes'],
    falseValue: ['no'],
  });
  const isEven = randomNum % 2 === 0;
  if (isEven === answer) {
    console.log('Correct!');
  }
  console.log(randomNum);
  // сгенерировать число и вывести его на экран
  // определить ответ
  //  если число четное - да, иначе нет
  // если ответ неправильный или введен неверный символ(кроме yes, no)
  //  вывести сообщение 'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, Bill!
  //  завершить игру
  // если ответ правильный отобразить 'Correct!'
  //  продолжить игру 3 раза
  // после завершения игры вывести Congratulations, Bill!
};

