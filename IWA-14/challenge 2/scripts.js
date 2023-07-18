// script.js

 
/**
* Arrow functions are commonly used when you need a concise function definition, 
* especially for functions that don't have complex logic or require a separate this context.
*/

const add = (a, b) =>  a + b; 

const multiply = (a, b) => a * b; 


function internal() {

	const add = this.internal.a + this.internal.b; 
	const multiply = add * this.internal.c; 

	// exmaple1 
	// const add = this.internal.(2) + this.internal.(4) = 6
	// const multiply = add(6) * this.internal.(8) = 48

	//example2
	// const add = this.internal.(2) + this.internal.(2) = 4
	// const multiply = add(4) * this.internal.(3) = 12
  
	console.log(add);
	console.log(multiply);

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