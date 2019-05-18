// import data from './resources/dictionary.js'

var data = require('./resources/dictionary.js');
let i = 0;
let array = Object.keys(data);
// while (i < array.length) {
// 	if (data.hasOwnProperty(array[i])) {
// 		let defArray = data[array[i]].split(' ');
// 	}
// 	console.log(array[i]);
// 	++i;
// }
let defString = data[array[6]];
let cleanString = defString.replace(/[^a-z ]/gi, '');

if (data.hasOwnProperty(array[6])) {
	let defArray = cleanString.toLowerCase().split(' ');
	console.log(array[6], defArray);
}
