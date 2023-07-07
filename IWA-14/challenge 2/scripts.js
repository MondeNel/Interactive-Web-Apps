// script.js

/**
 * The traditional function syntax allows you to define functions with more flexibility, 
 * including the ability to access the 'this' value
 */ 

 
/**
* we are also assigning a parameter to the function. parameters are the function's arguments.
* arguments are passed by value
* The function body (a + b) or (a * b) calculates the sum of a and b and returns the result.
*/

function add(a, b) {
	return a + b;
}
console.log(add.call(this, 2, 4));
// The call() method calls a function by passing 'this' and specified values as arguments.


function multiply(a, b) {
	return a * b;
} 

console.log(multiply.call(this, 2, 2));
// The call() method calls a function by passing 'this' and specified values as arguments.



/**
 * The 'this' keyword refers to the current object or the object that the function is a part of.
 * It allows you to access properties and methods within an object.
 */

// The add function is called using this.add with the values of a and b retrieved from the internal object 
// (this.internal.a and this.internal.b).
// the internal function returns 'this'.
// By using the this.internal, we are referencing to the object to access the values within the object.

function internal() {
	const added = this.add(this.internal.a, this.internal.b);
	this.multiply(this.internal.a, this.internal.b);
	return this;
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