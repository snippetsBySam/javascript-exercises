function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numbers) {
	return numbers.reduce((total, number) => total + number, 0);
}

function multiply (numbers) {
	return numbers.reduce((total, number) => total * number);;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a === 0) {
		return 1;
	}
	else {
		return a * factorial(a - 1);
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}