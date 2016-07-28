/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log('Question 1');

function divideByTwo(number) {
  return number / 2;
}

console.log(divideByTwo(10));

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log('Question 2');

function greeting(name1,name2) {
  console.log('Hi ' + name1 + '!');
  console.log('Hola ' + name2 + '!');
}

greeting('Angela','Ashley');

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log('Question 3');

function cartTotal(price){
  return Math.round(100 * (price * 6 * 1.036)) / 100;
}

console.log('Total cost for 6 at $4.99/can is $' + cartTotal(4.99));

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
console.log('Question 4');


function teamBuilder(peopleArray){
  var sweetTeams = {
    team1: [],
    team2: []
  };

  for (i=0; i<peopleArray.length; i++){
    if(i%2 === 0){
      sweetTeams.team1.push(peopleArray[i]);
    } else {
      sweetTeams.team2.push(peopleArray[i]);
    }
  }

  return sweetTeams;
}

var finalTeams = teamBuilder(teammates);
console.log(finalTeams);
console.log('Team 1: ' + finalTeams.team1.join(', '));
console.log('Team 2: ' + finalTeams.team2.join(', '));


// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
console.log('Question 5');

function quarter(number) {
  return number / 4;
}


console.log('50 divided by 4 = ' + quarter(50));


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
console.log('Question 6');

function area(length, width){
  return length * width;
}

function perimeter(length, width){
  return (2 * length) + (2 * width);
}

console.log('For a box that is 4 inches by 6 inches:');
console.log('The area is ' + area(4,6) + ' square inches.');
console.log('The perimiter is ' + perimeter(4,6) + ' inches.');

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log('Question 7');

function sleepings(hours){
  if(hours >= 8){
    return 'You\'re getting enough sleep!';
  } else {
    return 'You dont get enough sleep';
  }
}

console.log(sleepings(10));

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.
console.log('Question 8');

var numString = prompt('Enter a 3 digit number', '3 digit number');
console.log('Chosen number (as a string): ' + numString);


function addNumbers() {
  var sum = 0;

  for(i = 0; i<3; i++){
    sum += parseInt(numString.charAt(i));
  }

  return sum
};

console.log(addNumbers());

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
console.log('Question 9');

function piggyTotal(quarters, dimes, nickels, pennies){
  return Math.round(100 * ( (quarters*.25) +  (dimes*.10) + (nickels*.05) + (pennies*.01))) / 100;
}

console.log('I have $' + piggyTotal(1,1,1,1) + ' in my piggy bank!');

// 10. Develop a function that determines a person's age by prompting them for their birth year.
console.log('Question 10');

var birthYear = prompt('What year were you born?', 'YYYY');

function ageCalc() {
  return 2016 - birthYear;
}

console.log('Person is ' + ageCalc() + ' years old.');

// ADVANCED TRACK
// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
console.log('Question 11');

var userPhoneNumber = prompt('Enter phone number', 'xxx-xxx-xxxx');

function cleanPhoneNumber(phoneString) {
  var phoneNumber = phoneString.replace( /[^0-9]/g, '' );

  if (phoneNumber.length === 10){
    return phoneNumber;
  } else if (phoneNumber.length === 11 && phoneString.startsWith('1')) {
    phoneNumber = phoneNumber.substring(1);
    return phoneNumber;
  } else {
    return 'incorrect number entered'
  }
}

console.log(cleanPhoneNumber(userPhoneNumber));

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]


function isNaN(testValue) {
  return Number.isNaN(Number(testValue));
}

function isNumber(dataArray) {
  for (i = 0; i < dataArray.length; i++) {

    var element = dataArray[i];

    if(isNaN(element)) {
      console.log(element + ' is not a number')
    } else {
      console.log(element + ' is a number')
    }
  }
}

console.log(isNumber(arrayOfAllTheThings));

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.
console.log('Question 13');

function rollDice() {
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  return die1 + die2;
}

console.log(rollDice());


// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.
console.log('Question 14');

var rollTotal = 0;
var rollNumber = 0;

while (rollTotal < 41) {
  rollTotal += rollDice();
  rollNumber++;
}

console.log('Roll total: ' + rollTotal);
console.log('It took ' + rollNumber + ' rolls to get around the board one time.');


// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
console.log('Question 15');

function leapYear(year) {
  if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    return 'leap year';
  } else {
    return 'not a leap year';
  }
}

console.log('1997 is ' + leapYear(1997));
console.log('1996 is ' + leapYear(1996));
console.log('1900 is ' + leapYear(1900));
console.log('2000 is ' + leapYear(2000));
