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
console.log(data.lists[0][1][0]); 


// new way
const [[One ,], [Two ,], [Three ,]] = data.lists;
console.log(One); // this result in the first array, that is a string called 'first'


// This array refers to the Numbers array. The comma(,) are used to skip the first array.
const [[, first], [, second], [, third]] = data.lists;

console.log(first[0]); // the bracket[] targets the index of each element within the array.
console.log(first.at(0)); // the at() method allows us to target a specific index within the array.


// we created a result variable, to target the first index of each element in the array, which we will call later on
const result = [first[0], second[0], third[0]];

const extractBiggest = () => {

	if ( (first[first.length - 1] >= second[second.length - 1]) && (first[first.length - 1] >= third[third.length - 1] ) ) {
		return first.pop();
	}else if (second[second.length - 1] >= third[third.length - 1]){
		return second.pop();
	}else {
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