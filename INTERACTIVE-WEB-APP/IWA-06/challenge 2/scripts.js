personIncome();

	
function personIncome() {
	const rent = 400;
	const tax = '8%';
	const food = 51.7501;
	const salary = 800;
	const transport = 10.2;
	const hourOfDay = 0; //the previous code contain hourOfDay = 00
	const minuteOfDay = 0; //the previous code contain minuteOfDay = 00



	// Only change below this line
	if (hourOfDay === undefined && minuteOfDay === undefined); {
		console.log(hourOfDay, minuteOfDay);
	}

	const taxAsDecimal = (parseInt(tax) % parseInt('100') * 8);
	console.log(taxAsDecimal);

	const startingAfterTax = salary * parseInt('1') - taxAsDecimal;
	console.log(startingAfterTax);

	const balance = startingAfterTax - transport - food - rent;
	console.log(balance);

	console.log(`R ${balance.toFixed(2)}`);
}
