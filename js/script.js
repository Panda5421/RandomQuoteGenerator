/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

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
 * `printQuote` function'
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

	return document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);