// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below




// we target the key(item) first and than the value of the item #Destructuring
// and targeting the biggest number in the arrays above

console.log(data.lists[0][1][0]);  
console.log(data.lists[1][1][0]); 
console.log(data.lists[2][1][0]); 



//data.lists [0][1][0] gives us the first element value in the first array
// I assume we need to target the first element of each array hence {first = 1}
const { first = 1 } = data.lists[0][1][0] || {}


//data.lists [1][1][0] gives us the first element value in the second array
// I assume we need to target the first element of each array hence {second = 1}
const { second = 1 } = data.lists[1][1][0] || {}


//data.lists [2][1][0] gives us the first element value in the third array
// I assume we need to target the first element of each array hence {third = 1}
const { third = 1 } = data.lists[2][1][0] || {}


const result = [first, second, third];


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