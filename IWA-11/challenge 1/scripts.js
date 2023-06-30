// script.js



// Order 1

const root1 = document.querySelector('[data-key="order1"]');
console.log(root1);


const biscuits1 = document.querySelector(".biscuits .count");
biscuits1.textContent = root1.getAttribute("data-biscuits");
console.log(biscuits1);

const donuts1 = document.querySelector(".donuts .count");
donuts1.textContent = root1.getAttribute("data-donuts");
console.log(donuts1);


const pancakes1 = document.querySelector(".pancakes .count");
pancakes1.textContent = root1.getAttribute("data-pancakes");
console.log(pancakes1);

const status1 = root1.querySelector(".status dd");
console.log(status1);

// Order 2

const root2 = document.querySelector('[data-key="order2"]');
console.log(root2);

const biscuits2 = root2.querySelector(".biscuits .count");
biscuits2.textContent = root2.getAttribute("data-biscuits");

const donuts2 = root2.querySelector(".donuts .count");
donuts2.textContent = root2.getAttribute("data-donuts");

const pancakes2 = root2.querySelector(".pancakes .count");
pancakes2.textContent = root2.getAttribute("data-pancakes");

const status2 = root2.querySelector(".status dd");
console.log(status2);


// // Order 3

const root3 = document.querySelector('[data-key="order3"]');
console.log(root3);

const biscuits3 = root3.querySelector(".biscuits .count");
biscuits3.textContent = root3.getAttribute("data-biscuits");

const donuts3 = root3.querySelector(".donuts .count");
donuts3.textContent = root3.getAttribute("data-donuts");

const pancakes3 = root3.querySelector(".pancakes .count");
pancakes3.textContent = root3.getAttribute("data-pancakes");

const status3 = root3.querySelector(".status dd");
console.log(status3);


// // 1-biscuits= 1-root.biscuits,
// // 1-donuts = 1-root.donuts,
// // 1-pancakes = 1-root.pancakes,
// // 1-status = 1-root.status ? Delivered : Pending

// // 2-biscuits= 2-root.biscuits,
// // 2-donuts = 2-root.donuts,
// // 2-pancakes = 2-root.pancakes,
// // 2-status = 2-root.status ? Delivered : Pending

// // 3-biscuits= 3-root.biscuits,
// // 3-donuts = 3-root.donuts,
// // 3-pancakes = 3-root.pancakes,
// // 3-status = 3-root.status ? Delivered : Pending