// script.js

/**
 * I reassigned and declared the arrow function first by assigning it with a variable
 * and also by defining an arrow function expression you dont need the curly brackets to perform an expression
 */ 


let add = (a, b) => a + b 

let multiply = (a, b) => a - b 

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// // Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()