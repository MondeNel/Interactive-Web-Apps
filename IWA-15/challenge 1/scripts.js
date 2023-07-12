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
// old way
console.log(data.lists[0][1][0]);  
console.log(data.lists[1][1][0]); 
console.log(data.lists[2][1][0]); 


/**
 * we first declared a new variable and assign it the array.
 * we utilize destructuring assignment to directly extract the nested arrays from data.lists.
 * The empty commas (,) are used to skip the first element (string) in each inner array.
 * Then, we access the first element of each nested array using indexing ([0]) to obtain the target values.
 */
// new way
const [[, firstArray], [, secondArray], [, thirdArray]] = data.lists;

console.log(firstArray[0]);
console.log(secondArray[0]);
console.log(thirdArray[0]);


const { first = 1 } = data.first || {}
const { second = 1 } = data.second || {}
const { third = 1 } = data.third || {}

const result = []


const extractBiggest = () => {
	if (first[-1] > second[-1]) {
		return first
	}

	if (third[-1] < 1) {
		return second
	}
	
	return third
}

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