/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//I am going for an 'Exceeds Expectations' grade, but will accept a pass if I 'Meet Expectations'.


/*** 
 * `quotes` array 
 * Holds a list of quotes to be displayed.
***/
const quotes = [
	{
		quote: 'Destiny is a gift. Some go their entire lives living existences of quiet desperation, \
		never learning the truth that what feels as though a burden pushing down upon our shoulders is \
		actually a sense of purpose hat lifts us to greater heights. Never forget that fear is but a precursor\
		to valor, that to strive and triumph in the face of fear is what it means to be a hero. Don\'t think, \
		Master Jim. Become.',
		source: 'Blinky',
		citation: 'Trollhunters, Season 1 Episode 2',
		year: '2016',
		tags: ['inspirational', 'monologue', 'hero']
	},
	{ quote: 'The belief in a supernatural source of evil is not necessary. Men alone are quite capable of every wickedness.', 
	source: 'Joseph Conrad' },
	{ quote: 'The healthy man does not torture others, generally it is the tortured who turn into torturers.', 
	source: 'Carl Jung' },
	{ quote: 'Of all the preposterous assumptions of humanity, nothing exceeds the criticisms made of the habits of the poor by the well-housed, well-warmed, and well-fed.', 
	source: 'Eleanor Roosevelt' },
	{ quote: 'Convictions are more dangerous enemies of truth than lies.', 
	source: 'Nietzsche' }
];


/***
 * `getRandomQuote` function
 * Returns a random quote from the `quote` array.
***/
function getRandomQuote() {
	let rand = Math.floor(Math.random() * quotes.length);
	return quotes[rand];
}


/***
 * `getRandomColor` function
 * Returns a random color
 */
function getRandomColor(c) {
	
	
//Brainstorming how best to generate random color
	// const letters = '0123456789ABCDEF';
	// let color = '#';
	// for(let i = 0; i < 6; i++) {
	// 	let rand = Math.floor(Math.random()*letters.length);
	// 	color += letters[rand];
	// }
	// return color;


	// let colorVals = [0, 0, 0];
	// for(let i=0; i<colorVals.length; i++) {
	// 	colorVals[i] = Math.floor(Math.random()*256);
	// }
	// const color = `rgb(${colorVals[0]}, ${colorVals[1]}, ${colorVals[2]})`;
	// return color;


	const colors = ['rgb(33, 104, 105)', 'rgb(98, 60, 234)', 'rgb(142, 220, 230)', 'rgb(41, 73, 54)', 'rgb(63, 167, 214)', 'rgb(3, 121, 113)', 'rgb(1, 42, 54)'];
	let color = colors[Math.floor(Math.random()*colors.length)];
	while(c === color) {
		color = colors[Math.floor(Math.random()*colors.length)];
	}
	// console.log(color);
	// console.log(c);
	return color;
}


/***
 * `printQuote` function
 * Displays a random quote on the webpage.
***/
function printQuote() {
	let randQuote = getRandomQuote();
	let html = `<p class="quote">${randQuote.quote}</p>
				<p class="source">${randQuote.source}`;
	if(randQuote.citation) {
		html += `<span class="citation">${randQuote.citation}</span>`;
	}
	if(randQuote.year) {
		html += `<span class="year">${randQuote.year}</span>`;
	}
	if(randQuote.tags) {
		for(let tag in randQuote.tags) {
			html += `<span class="tags">${randQuote.tags[tag]}</span>`;
		}
	}
	html += '</p>';

	//Code from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
	//Sets the background color of the div element the quote is in randomly.
	//let color = '#3ac162';
	let color = document.getElementById('quote-box').style.backgroundColor;
	document.getElementById('quote-box').style.backgroundColor = getRandomColor(color);

	return document.getElementById('quote-box').innerHTML = html;
}

//Automatically refreshes quotes every 10 seconds.
setInterval(function() {
	printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);