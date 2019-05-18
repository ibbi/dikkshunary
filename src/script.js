// import data from './resources/dictionary.js'

var data = require('./resources/dictionary.js');
var async = require('async');
let i = 0;
let array = Object.keys(data);

let defString = data[array[6]];
let cleanString = defString.replace(/[^a-z ]/gi, '');
let asyncDefinition = (word) => {
	console.log(
		'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------',
		word,
		data[word]
	);
};
if (data.hasOwnProperty(array[6])) {
	let defArray = cleanString.toLowerCase().split(' ');
	async.each(defArray, (i) => {
		if (data.hasOwnProperty(i)) {
			asyncDefinition(i);
		}
	});

	// console.log(array[6], defArray);
}
