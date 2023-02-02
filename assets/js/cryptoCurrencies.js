async function displayCoins() {
	try {
		// Get data from API by calling the getListOfCoins() function
		const response = await getListOfCoins(100);
		// Render 100 coin cards by passing the coins and parent element to the renderCoinCards() function
		renderCoinCards(response.data.coins, $("#cardsContainer"));
	} catch (error) {
		// Display an error message to the end-user if the API call fails
		console.error('An error occurred while fetching the data from the API: ', error.responseJSON.message);
	}
}


// Function to create a single coin card with the given coin data
function createCoinCard(coin) {
	// Destructure variables from the response
	const { name, price, change, iconUrl, symbol, uuid } = coin;

	// Return the HTML template for a single coin card
	return `
    <div data-uuid='${uuid}' class="card">
      <div class='card-header'>
        <h2>${name}</h2>
        <img class='coin-icon' width='30px' src='${iconUrl}' alt='${symbol} icon'/>
      </div>
      <p>Price $${price}</p>
      <p>Daily Change ${change}%</p>
    </div>
  `;
}


// Function to render 100 coin cards. Takes an array of coins and appends each coin card to coins wrapper and then to the given parent element
function renderCoinCards(coins, parentElement) {
	//Create wrapper container for all cards
	const cardsWrapperEl = $('<div>');

	// Loop through the array of all coins and create a card for each coin
	coins.forEach(function (coin) {
		const coinCard = createCoinCard(coin);
		// Append the coin card to the cards wrapper
		cardsWrapperEl.append(coinCard);
	});

	// Append the cardsWrapperEl to the parent element
	parentElement.append(cardsWrapperEl);
}

// Call the displayCoins() function to start the process
displayCoins();