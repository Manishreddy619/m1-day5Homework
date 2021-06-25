/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const rectangleArea = (l1, l2) => {
	let area = l1 * l2;
	return area;
};
console.log(rectangleArea(20, 30));
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = (value1, value2) => {
	if (value1 === value2) {
		return 3 * (value1 + value2);
	} else return value1 + value2;
};
console.log(crazySum(3, 3));
console.log(crazySum(3, 4));

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = (number) => {
	if (number - 19 > 19) {
		return 3 * (number - 19);
	} else if (number - 19 <= 0) {
		return -(number - 19);
	} else return number - 19;
};
console.log(crazyDiff(3)); // 16 <19
console.log(crazyDiff(50)); // 30 > 20
console.log(crazyDiff(-20)); // -49 >19
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = (integer) => {
	if (integer > 20) {
		if (integer <= 100) {
			return true;
		} else if (integer === 400) {
			return true;
		} else return false;
	} else return false;
};
console.log(boundary(40));
console.log(boundary(400));
console.log(boundary(-4));
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
const strivify = (str) => {
	let word = str.toLowerCase();
	let checkWord = word.includes('strive');
	let strive = 'strive';
	if (checkWord === true) {
		if (word.length === strive.length) {
			return word;
		} else return `${strive + ' ' + word}`;
	}
};
console.log(strivify('strive'));
console.log(strivify('StriveE'));
console.log(strivify('manish elaganti strive'));
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = (number) => {
	if (number > 0) {
		if (number % 3 === 0) {
			return `number is multiple of 3 : ${number}`;
		} else if (number % 7 === 0) {
			return `number is multiple of 7 : ${number}`;
		} else return `not a multiple of 3 and 7 :${number}`;
	} else return `enter a postive number`;
};
console.log(check3and7(7));
console.log(check3and7(70));
console.log(check3and7(15));
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
const reverseString = (str) => {
	let split = str.split('');
	let reverse = split.reverse();
	let join = reverse.join('');
	return join;
};
console.log(reverseString('strive'));
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
const upperFirst = (str) => {
	let upperstr = str.charAt(0).toUpperCase() + str.slice(1);
	return upperstr;
};
console.log(upperFirst('manish'));
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = (str) => {
	let newStr = str.slice(1, -1);
	return newStr;
};
console.log(cutString('manish'));
console.log(cutString('striveschool'));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = function (n) {
	let arry = [];
	for (i = 0; i < n; i++) {
		arry.push(Math.floor(Math.random() * 10));
	}
	return arry;
};
console.log(giveMeRandom(4));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
