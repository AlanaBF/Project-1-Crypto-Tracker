// Displays a list of top 10 cryptocurrencies by utilizing the data from an API.
// The displayCoins() function is an asynchronous function that calls the getListOfCoins() function, 
// which is supposed to fetch data from an API.
// The returned data is then passed to the renderCoinCards() function to render 10 coin cards. 
// The createCoinCard() function creates a single coin card with the given coin data, 
// and the renderCoinCards() function loops through the coins and appends each coin card to a parent element.

//This formatter is needed to convert big numbers into nice looking str
//Taken from stackoverflow :) 
let formatter = Intl.NumberFormat('en', { notation: 'compact' });

async function displayCoins() {
	try {
		// Get data from API by calling the getListOfCoins() function
		const response = await getListOfCoins();
		//Render general market stats to jumbotron
		renderMarketStats(response.data.stats);
		// Render 10 coin cards by passing the coins and parent element to the renderCoinCards() function
		renderCoinCards(response.data.coins, $("#top10"));


	} catch (error) {
		// Display an error message to the end-user if the API call fails
		console.error('An error occurred while fetching the data from the API: ', error.responseJSON.message);
	}
}

//Function to create general market stats block
function renderMarketStats(data) {
	// Destructure the properties from the `data` object
	const { totalCoins, totalMarkets, totalMarketCap, total24hVolume } = data;
	// Create a string of HTML code using the extracted values
	const statsEl = `
		<div class="stats-container">
				<h4>Market Statistics</h4>
				<div class="stats-wrapper" style='display: flex; justify-content: space-between;'>
						<p>Total Criptocurrencies: <span>${totalCoins}</span></p>
						<p>Total Markets: <span>${totalMarkets}</span></p>
						<p>Total MarketCap: <span>${formatter.format(totalMarketCap)}</span></p>
						<p>Total 24h Volume: <span>${formatter.format(total24hVolume)}</span></p>
				</div>
		</div>
`
	// Append the HTML code to an container inside jumbotron
	$('.jumbotron').children('.container').append(statsEl);
}


// Function to create a single coin card with the given coin data
function createCoinCard(coin) {
	// Destructure variables from the response
	const { name, price, change, iconUrl, symbol, uuid, marketCap } = coin;
	// Return the HTML template for a single coin card
	return `
    <div data-uuid='${uuid}' class="card">
      <div class='card-header'>
        <h2>${name}</h2>
        <img class='coin-icon' width='30px' src='${iconUrl}' alt='${symbol} icon'/>
      </div>
      <p>Price $${Number(price).toFixed(2)}</p>
      <p>Daily Change ${change}%</p>
			<p>Market Cap $${formatter.format(marketCap)}</p>
	<i class="fav-link fa-solid fa-heart data-uuid='${uuid}'"></i>
    </div>
  `;
}
// change from card link to icon
// <a href="#" class="card-link" data-uuid='${uuid}'>Add to favourites</a>

// Function to render 10 coin cards. Takes an array of coins and appends each coin card to coins wrapper and then to the given parent element
function renderCoinCards(coins, parentElement) {
	//Create wrapper container for all cards
	const cardsWrapperEl = $('<div>').addClass('cardsWrapper');

	// Loop through the array of all coins and create a card for each coin
	coins.forEach(function (coin) {
		const coinCard = createCoinCard(coin);
		// Append the coin card to the cards wrapper
		cardsWrapperEl.append(coinCard);
	});

	// Append the coin card to the parent element
	parentElement.append(cardsWrapperEl);
	// Add event listener to save  favorite to localStorage 
	$(cardsWrapperEl).on("click", '.fav-link', saveToLS);
}



// Function to save the favourite coin's UUID to local storage
function saveToLS(e) {
	// Get the UUID of the current coin card
	const currentCardUuid = $(this).attr("data-uuid");

	// Check if the favourites item exists in local storage, and create an empty array if not
	let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

	// Check if the current card's UUID is already in the list of favourites
	const isFavourite = favourites.includes(currentCardUuid);
	if (isFavourite) {
		// If the UUID is already in the favourites, remove it from the list
		favourites = favourites.filter(uuid => uuid !== currentCardUuid);
	} else {
		// If the UUID is not in the favourites, add it to the list
		favourites = [...favourites, currentCardUuid];
	}

	// Save to local storage
	localStorage.setItem("favourites", JSON.stringify(favourites));
}


// Call the displayCoins() function to start the process
displayCoins();



