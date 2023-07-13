// script.js

 
/**
* Arrow functions are commonly used when you need a concise function definition, 
* especially for functions that don't have complex logic or require a separate this context.
*/

const add = (a, b) => {
	return a + b;
  };
 
  
  const multiply = (a, b) => {
	return a * b;
  };



/**
 * The 'this' keyword refers to the current object or the object that the function is a part of.
 * It allows you to access properties and methods within an object.
 */



/**
 * The add function is called using this.add with the values of a and b retrieved from the internal object 
 * (this.internal.a and this.internal.b).
 * he internal function returns 'this'.
 * By using the this.internal, we are referencing to the object to access the values within the object.
 */

function internal() {

	const added = this.add(this.internal.a, this.internal.b);

	const multiplied = this.multiply(this.internal.a, this.internal.b);

	console.log(added);
	console.log(multiplied);

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