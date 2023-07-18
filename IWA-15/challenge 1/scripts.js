// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

/**
 * This approach directly accesses the target values by chaining the index operators ([]) on the data.lists array.
 * Each index corresponds to the desired level of nesting, enabling us to retrieve the values.
 */

// OLD WAY
// the first [0] index = the nested array itself. ['first', [15, 11, 13, 7, 5]
// the second [1] index = the second array of numbers. [15, 11, 13, 7, 5]
// the third [0] index = the index[0] of the second array will give us first number of the array which is 15 
console.log(data.lists[0][1][0]); 


// new way
// This array refers to the "string" array. The comma(,) are used to skip the following array.
// we utilize destructuring assignment to directly extract the nested arrays from data.list
const [[One ,], [Two ,], [Three ,]] = data.lists;

console.log(One); // this result in the first array, that is a string called 'first'


// This array refers to the Numbers array. The comma(,) are used to skip the first array.
const [[, first], [, second], [, third]] = data.lists;

console.log(first[0]); // the bracket[] targets the index of each element within the array.
console.log(first.at(0)); // the at() method allows us to target a specific index within the array.


 // we created a result variable, to target the first index of each element in the array, which we will call later on
const result = [first[0], second[0], third[0]];

const extractBiggest = () => {

// The purpose of using comparison operators in this function is to make a decision
// based on the relationship between the last elements


// first.length - 1 (5) >= second.length - 1 (10)
	if (first[first.length - 1] >= second[second.length - 1] ) {
		return first.pop(); 

// In this case, first.pop() is called, which removes the last element from the first array and returns it as the result.
// by using the pop() method in this context allows us to retrieve, compare, and remove the last elements of the arrays,
// providing a way to determine the array with the largest last element.

	}
// second.length - 1 (10) >= third.length - 1 (1)
	if (second[second.length - 1] >= third[third.length - 1]){
		return second.pop();
	}
	
// third.length - 1 (1) !== first.lenght - 1 (5) 
// Using the not equal to operator allows us to handle cases where you want to remove the last element from 
// third if it differs from the last element of first.
	if (third[third.length - 1] !== first[first.length - 1]) {
		return third.pop();
	}
	
};
	

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)