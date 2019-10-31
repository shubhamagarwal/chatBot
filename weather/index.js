'use strict';
const YQL = require('yql');
const axios = require('axios');

let getWeather = (location, type = 'forecast') => {
	// return new Promise((resolve, reject) => {
	// 	let query = new YQL(`select ${type === 'current' ? 'item.condition, location' : '*'} from weather.forecast where woeid in (select woeid from geo.places(1) where text = "${location}") and u="c"`);
	// 	console.log(query)
	// 	query.exec((error, response) => {
	// 		if(error) {
	// 			reject(error);
	// 		} else {
	// 			resolve(response);
	// 		}
	// 	});
	// });
	return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a12150231220c207f8d4ae4f1ee798b`)
	// .then(response => {
	// 	return response
	// })
	// .catch(error => {
	// 	console.log(error);
	// });
}

module.exports = getWeather;