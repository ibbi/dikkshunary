// import data from './resources/dictionary.js'

var data = require('./resources/dictionary.js');
let i = 0;
let array = Object.keys(data);

let defString = data[array[6]];
let cleanString = defString.replace(/[^a-z ]/gi, '');

if (data.hasOwnProperty(array[6])) {
	let defArray = cleanString.toLowerCase().split(' ');
	defArray.map((i) => {
		if (data.hasOwnProperty(i)) {
			console.log(
				'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------',
				i,
				data[i]
			);
		}
	});

	// console.log(array[6], defArray);
}
