'use strict';
const Readline = require('readline');
const matcher = require('./matcher');
const weather = require('./weather');
const {currentWeather, forecastWeather} = require('./parser');
const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.setPrompt('> ');
rl.prompt();

rl.on('line', reply => {
    matcher(reply, data => {
        //console.log(data);
        switch(data.intent) {
            case 'Hello':
				console.log('A big hello');
				rl.prompt();
                break;
            case 'Exit':
				console.log('Have a great day');
				process.exit(0);
                break;
            case 'CurrentWeather':
                //console.log(`Checking weather in ${data.entities.city}`);
                weather(data.entities.city, 'current')
					.then(response => {
						//console.log(response.data);
                        let parseResult = currentWeather(response);
						console.log(parseResult);
						rl.prompt();
					})
					.catch(error => {
						console.log("There seems to be a problem connecting to the Weather service!");
						rl.prompt();
					});
                break;
            default: {
				console.log("I don't know what you mean :(");
				rl.prompt();
			}
        }
    });
    // console.log(`you said ${reply}`);
    // rl.prompt();
});