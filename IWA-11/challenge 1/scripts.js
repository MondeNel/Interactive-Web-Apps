// script.js

// Order 1

/**
 * we used querySelector for searching and returning the very first element within the document that matches the given selector.
 * It acts as a tool that allows you to find and interact with specific elements in an HTML document.
 * querySelector allows us to easily target elements, the same way we would by using CSS.
 *  when we are targeting the class in CSS, we make use of the dot.notation
 */

const root1 = document.querySelector('[data-key="order1"]'); 
const biscuits1 = document.querySelector(".biscuits .count");
const donuts1 = document.querySelector(".donuts .count");
const pancakes1 = document.querySelector(".pancakes .count");;
const status1 = root1.querySelector(".status dd");

// Order 2

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = root2.querySelector(".biscuits .count");
const donuts2 = root2.querySelector(".donuts .count");
const pancakes2 = root2.querySelector(".pancakes .count");
const status2 = root2.querySelector(".status dd");

// // Order 3

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = root3.querySelector(".biscuits .count");
const donuts3 = root3.querySelector(".donuts .count");
const pancakes3 = root3.querySelector(".pancakes .count");
const status3 = root3.querySelector(".status dd");


biscuits1.textContent = root1.getAttribute("data-biscuits");
donuts1.textContent = root1.getAttribute("data-donuts");
pancakes1.textContent = root1.getAttribute("data-pancakes");



/**
 * we made use of the ternary operator to compare if "data-delivered" information in the "root1" box says "true",
 * But if the "data-delivered" information says anything else, it means the thing wasn't delivered yet
 * In that case, we want the program to change the text inside the "status1" box to say "Pending".
 * We also made use of getAttribute part which helps us retrieve the value of the "data-delivered" attribute from the root1 element
 * The retrieved value is then compared to the string "true" using the strict equality operator ===. Which checks for the same type and value.
 */

// Order 1

// Get the value of the "data-delivered" attribute from the "root1" element
const deliveredAttribute1 = root1.getAttribute("data-delivered"); //  data-delivered= "false"

/**
 * This code checks the value of the "data-delivered" attribute and updates the text content of the "status1" element based on that value.
 *  If the attribute is "true", it sets the text content to "Delivered", 
 *  and if it's anything else, it sets the text content to "Pending".
 */
if (deliveredAttribute1 === "true") {
  status1.textContent = "Delivered";
} else {
  status1.textContent = "Pending";
}






// Order 2

biscuits2.textContent = root2.getAttribute("data-biscuits"); //  data-biscuits = "5" the attribute value is 5
donuts2.textContent = root2.getAttribute("data-donuts"); // data-donuts = "0" ...
pancakes2.textContent = root2.getAttribute("data-pancakes"); // data-pancakes = "2" ...


const deliveredAttribute2 = root2.getAttribute("data-delivered"); // data-delivered = "false"

if (deliveredAttribute2 === "true") {
 status2.textContent = "Delivered";
} else {
  status2.textContent = "Pending";
}







// Order 3

biscuits3.textContent = root3.getAttribute("data-biscuits");
donuts3.textContent = root3.getAttribute("data-donuts");
pancakes3.textContent = root3.getAttribute("data-pancakes");

const deliveredAttribute3 = root3.getAttribute("data-delivered"); //   data-delivered = "true"

if (deliveredAttribute3 === "true") {
  status3.textContent = "Delivered";
} else {
  status3.textContent = "Pending";
}
