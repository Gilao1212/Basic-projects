'use strict';

// Function Declaration

function cacalge(bearthyear) {
  return 2037 - bearthyear;
}

const age1 = cacalge(1991);
console.log(age1);

// Function Expression
const cacalge2 = function (bearthyear) {
  return 2037 - bearthyear;
};
const age2 = cacalge2(2002);
console.log(age2);
/* const firstName = 'Jilao';
const LastName = 'Mohamed'; */
const yearOfretirement = function (bearthyear) {
  const age = 2024 - bearthyear;
  const retirment = 65 - age;
  return `My first name is ${yearsAndnames[0]} and last name ${yearsAndnames[4]} i am ${age} year old i will retire ${retirment}`;
};
const yearsAndnames = ['Mohamed', 2003, 1999, 1990, 'Abdu'];
yearsAndnames.unshift('Jilao');
console.log(yearOfretirement(yearsAndnames[2]));
/* 
function cutfruitpiece(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applesPiece = cutfruitpiece(apples);
  const orangesPiece = cutfruitpiece(oranges);
  const juice = `juice withe ${applesPiece} and piece of orange ${orangesPiece}`;
  return juice;
}
console.log(fruitProcessor(2, 4));

function total(num1, num2) {
  const add = num1 + num2;
  if (add > 5) {
    console.log('it is big number');
  } else if (add < 5) {
    console.log('it is small');
  } else {
    console.log('it is the same number');
  }
  return `the two number add is ${add} most greater than 5 or less than of 5 and same`;
}
console.log(total(3, 2)); */

/* Write your code below. Good luck! 🙂 */
/* 
const calcAverage = (a, b, c) => a + b + c;
console.log(calcAverage(3, 4, 5));
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas, scoreDolphins);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `the avrage of dolphine ${avgDolphins} vs  the  avrage of ${avgKoalas}🏆`
    );
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(
      `the avrage of dolphine ${avgKoalas} vs the  avrage of ${avgDolphins}🏆`
    );
  } else {
    console.log('No team wins');
  }
};
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas, scoreDolphins);
checkWinner(scoreDolphins, scoreKoalas);
 */

prompt('Enter you name: ');
prompt('Enter her name: ');

let num = Math.random() * 100;
num = Math.floor(num) + 1;
alert('your love score ' + num + '%');

function calculateLoveScore() {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  if (name1 === '' || name2 === '') {
    document.getElementById('result').innerText = 'Please enter both names.';
    return;
  }

  const loveScore = Math.floor(Math.random() * 101);

  document.getElementById(
    'result'
  ).innerText = `${name1} and ${name2}'s love score is: ${loveScore}%`;
}

/* function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return 'Your BMI is <bmi>, ' + bmi + ' so you are underweight';
  } else if (bmi > 18.5 || bmi <= 24.9) {
    return 'Your BMI is <bmi>,' + bmi + 'so you have a normal weight';
  } else if (bmi > 24.5) {
    return 'Your BMI is <bmi>,' + bmi + ' so you are overweight';
  }
  return;
}
let result = bmiCalculator(79, 1.92);
console.log(result); */

/* let output = [];
let caunt = 1;
function fizz() {
  output.push(caunt);
  caunt++;
  console.log(output);
}
fizz();
fizz();
fizz(); */
