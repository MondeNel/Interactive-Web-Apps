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
// console.log(data.lists[0][1][0]);  
// console.log(data.lists[1][1][0]); 
// console.log(data.lists[2][1][0]); 


/**
 * we first declared a new variable and assign it the array.
 * we utilize destructuring assignment to directly extract the nested arrays from data.lists.
 * The empty commas (,) are used to skip the first element (string) in each inner array.
 * Then, we access the first element of each nested array using indexing ([0]) to obtain the target values.
 */


// new way


// This array refers to the "string" array. The comma(,) are used to skip the first array.
const [[One ,], [Two ,], [Three ,]] = data.lists;

// console.log(One);
// console.log(Two);
// console.log(Three);



// This array refers to the Numbers array. The comma(,) are used to skip the second array.
const [[, ArrayNum1], [, ArrayNum2], [, ArrayNum3]] = data.lists;

// console.log(ArrayNum1[0]);
// console.log(ArrayNum2[0]);
// console.log(ArrayNum3[0]);


/**
* The destructuring assignment is used to extract the nested arrays within data.lists and assign their values to first, second, and third.
* The first element of each nested array is ignored (represented by an empty slot ,) as it is not needed.
* The values of first, second, and third are logged to the console.
* The result array is created with the first element of each nested array (first[0], second[0], third[0]).
* we targeted the array that consists of numbers, because we can't perform experssions with strings. 
*/

const [[, first], [, second], [, third]] = data.lists;

// console.log(first);
// console.log(second);
// console.log(third);

const result = [first[0], second[0], third[0]];

	// we are accessing the last element of an array by using [.length - 1]

	const extractBiggest = () => {

		if (first[first.length - 1] >= second[second.length - 1]) {
		  return first.pop(); // when we pop, we remove the last element in the array
		  
		}
		
		if (third[third.length - 1] === 1) {
		  return second.pop();
		}
		
		return third.pop();
	  };
	  
	  // The for loop is used to call the extractBiggest function 15 times and push the returned,
	  // values into the result array.
	  for (let i = 0; i < 15; i++) {
		result.push(extractBiggest());
	  }
	  
	//   console.log(result);
  


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