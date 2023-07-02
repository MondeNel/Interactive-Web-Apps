// script.js

// Order 1

/**
 * we used querySelector for searching and returning the very first element within the document that matches the given selector.
 * It acts as a tool that allows you to find and interact with specific elements in an HTML document.
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

if(status1.textContent = root1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending");




biscuits2.textContent = root2.getAttribute("data-biscuits");
donuts2.textContent = root2.getAttribute("data-donuts");
pancakes2.textContent = root2.getAttribute("data-pancakes");

if(status2.textContent = root2.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending");



biscuits3.textContent = root3.getAttribute("data-biscuits");
donuts3.textContent = root3.getAttribute("data-donuts");
pancakes3.textContent = root3.getAttribute("data-pancakes");

if(status3.textContent = root3.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending");