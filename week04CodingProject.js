// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// * Do not use numbers to reference the last element, find it programmatically.
// * ages[7] - ages[0] is not allowed!
// b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// c. Use a loop to iterate through the array and calculate the average age.
let ages = [3, 9, 23, 64, 2, 8, 28 ,93]
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];

console.log("1 a.: ", result);

let newAge = 105;
ages.push(newAge);
let newLastIndex = ages.length - 1;
let resultB = ages[newLastIndex] - ages[0];
console.log("b.:", resultB)

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

const averageAge = sum / ages.length;

console.log("c:", averageAge);


// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// a. Use a loop to iterate through the array and calculate the average number of letters per name.
let totalLength = 0;
for (let i = 0; i < names.length; i++) {
    totalLength += names[i].length;
}
let averageLength = totalLength / names.length;

console.log("2 a.:", averageLength);

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}
concatenatedNames = concatenatedNames.trim();
console.log("b.:", concatenatedNames);

// 3. How do you access the last element of any array?
lastIndex = names.length - 1;
let  lastElement = names[lastIndex];
console.log("3: ", lastElement)

// 4. How do you access the first element of any array?
let firstElement = names[0];

console.log("4: ", firstElement)


// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add 
// the length of each name to the nameLengths array.
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
let nameAndNumbers = []
for (let i = 0; i < names.length; i++) {
   let name = names[i];
   let length = name.length;
   nameAndNumbers.push(length);
}
console.log("5: ", nameAndNumbers);


// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthsSum = 0
for (let i = 0; i < names.length; i++) {
   nameLengthsSum += nameAndNumbers[i]
}
console.log("6: ", nameLengthsSum);

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself 
// n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatenateWord(word, n) {
   if (n <= 0) {
     return '';
   }
   return word.repeat(n);
 }
 let word = 'Hello';
 let n = 3;
 let resultCont = concatenateWord(word, n);
 console.log("7: ",resultCont);

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should 
// be the first and the last name separated by a space.
function FullName(firstName, lastName) {
   return firstName + ' ' + lastName;
 }
 let firstName = 'Cristian';
 let lastName = 'Mantilla';
 let firstAndLastName = FullName(firstName, lastName);
 console.log("8: ",firstAndLastName);


// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater 
// than 100.
function isGreaterThan100(numbers) {
   const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   return sum > 100;
 }
 const numbers = [40, 30, 35];
 const resultGreaterThan100 = isGreaterThan100(numbers);
 console.log("9: ", result);

// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
   if (numbers.length === 0) {
   }
   let sum = numbers.reduce((num1, num2) => num1 + num2, 0);
   let average = sum / numbers.length;
      return average;
 }
 let numbersAverage = [7, 23, 65, 52];
 let resultAverage = calculateAverage(numbers);
 console.log("10: ",resultAverage);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.

function whichAverageIsGreaterThan(arr1, arr2) {
   let aver1 = calculateAverage(arr1);
   let aver2 = calculateAverage(arr2);
   return aver1 > aver2;
 }
 function calculateAverage(numbers) {
   if (numbers.length === 0) {
     return 0;
   }
   let sum = numbers.reduce((num1, num2) => num1 + num2, 0);
 
   let average = sum / numbers.length;
 
   return average;
 }
 const array1 = [4, 5, 6, 7];
 const array2 = [5, 6, 7, 8];
 const resultAverageGreater = whichAverageIsGreaterThan(array1, array2);
 console.log("11: ",resultAverageGreater)


// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true 
// if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
   return isHotOutside && moneyInPocket > 10.50;
 }
 const isHotOutside = true;
 const moneyInPocket = 16.00;
 
 const shouldBuyDrink = willBuyDrink(isHotOutside, moneyInPocket);
 console.log("12: ",shouldBuyDrink);

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function calculateRectangleArea(width, height) {
   if (width <= 0 || height <= 0) {
     return "width and height must be positive";
   }
   const area = width * height;
   return area;
 }
 let rectangleWidth = 3;
 let rectangleHeight = 7;
 console.log("13: ",`The area of the rectangle is ${calculateRectangleArea(rectangleWidth, rectangleHeight)}`)

 // This function calculates the rectangle area. I created it because is basic operaction in geometry and can be usefull for web page design .
