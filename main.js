// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ['soccer', 'baseball', 'football', 'swimming'];
// total = 4
console.log(sports);
console.log(total);

// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// // A:
//
function longestString(stringArray){

  var longest = "";

  //for every string in the array less than the strings length do this x times...
  for (var index = 0; index < stringArray.length; index++) {
    //if length of the strings index is greater than the length of the longest index do this...

    if (stringArray[index].length > longest.length) {
      longest = stringArray[index];
      console.log(longest);
    }

  }
  return longest;
}
console.log("longestString should return:" + longestString(strings));
// console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});
//
//
// // Use the `numbers` array for questions 3 - 8.
 var numbers = [1,12,4,18,9,7,11,3,101,5,6];
//
//
// // 3.
// // Write a function `smallestNumber()` that accepts an array
// // and returns the smallest number in the array.
// // A:

function smallestNumber(arr){
  return arr.reduce(function(prevNum, currNum){
    if (currNum.length < prevNum.length)
    {
        return currNum;
    }
    else {
      return prevNum;
    }
  })
}
console.log("smallestNumber: " + (numbers));
// console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});
//
//
// // 4.
// // Write a function `getEvens()` that accepts an array
// // and returns only the even numbers in the array.
// // A:
  var numbers = [1,12,4,18,9,7,11,3,101,5,6, 22, 32,44];
//
function getEvens(numbers){
  var even = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    }
  }
  return even;
}
console.log("getEvens should return even numbers" + getEvens(numbers));

//
// console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});
//
//
// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
//
var arr = ['6,5,101,3,11,7,9,18,4,12,1'];
//console.log(arr);

function arrayReverser(arr) {
  var revArray;
  for (var i = arr.length -1; i >= 0; i--) {
    revArray += arr[i] + ", ";
  }
  return revArray;
}

//console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


//
// console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});
//
//
// // 6.
// // Write a function that accepts an array argument
// // and returns the sum of all of the numbers in the array
// // A:
//
var numbers = [150, 20, 5, 2];

function sumArrayOfNumbers(arr){
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumArrayOfNumbers(numbers));

// console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});
//
//
// // 7.
// // Write a function that accepts an array argument
// // and returns an array of only the numbers greater than 10
// // A:
//
var numbers = [12,9,18,0,11,101];

var numbersOver10 = function(arr){
  var numbersOver10 = true;

  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}
console.log(numbersOver10(arr));
//
// console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});
//
//
// // 8.
// // Write a function that accepts both an array and number argument
// // and returns an array of only the numbers greater than the number passed to the function
// // A:
//
function numbersOverX(numberArray, num){
  var array = new Array;
  for (var i = 0; i < numberArray.length; i++) {
    //return only the numbers greater than the number passed into it
    if (numberArray[i] > num) {
      numberArray[i].push(array);
    }
    return array;
  }
}
// console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});
// //
// // 9.
// // Write a function `joinArrays()` that takes an array of arrays,
// // and returns a single array with the contents of the second array
// // listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// // A:
function joinArrays(num1Array, num2Array){
  var array = num1Array.concat(num2Array);
    return array;
}
console.log("JoinArrays: " + joinArrays(numbers, numbersTwo));
//
// console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});
//
//
// // 10.
 // Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
instructorOne = 'Joe', 'iOS'

var instructorTwo = instructors[0][1];
instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
 instructorThree = 'Brit'
