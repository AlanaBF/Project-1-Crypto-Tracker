// Displays a list of top 10 cryptocurrencies by utilizing the data from an API.
// The displayCoins() function is an asynchronous function that calls the getListOfCoins() function, 
// which is supposed to fetch data from an API.
// The returned data is then passed to the renderCoinCards() function to render 10 coin cards. 
// The createCoinCard() function creates a single coin card with the given coin data, 
// and the renderCoinCards() function loops through the coins and appends each coin card to a parent element.


async function displayCoins() {
	try {
		// Get data from API by calling the getListOfCoins() function
		const response = await getListOfCoins();
		// Render 10 coin cards by passing the coins and parent element to the renderCoinCards() function
		renderCoinCards(response.data.coins, $("#top10"));
		$(".card-link").on("click", saveToLS)

		//function to save the favourites link to local storage
		function saveToLS(e) {
			// favourites variable to get the item from local storage  or empty array
			const favourites = JSON.parse(localStorage.getItem("favourites")) || []
			localStorage.setItem("favourites", JSON.stringify([... favourites, $(this).attr("data-uuid")]))	
		}

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
	  <a href="#" class="card-link" data-uuid='${uuid}'>Add to favourites</a>
    </div>
  `;
}


// Function to render 10 coin cards. Takes an array of coins and appends each coin card to coins wrapper and then to the given parent element
function renderCoinCards(coins, parentElement) {
	//Create wrapper container for all cards
	const cardsWrapperEl = $('<div>');

	// Loop through the array of all coins and create a card for each coin
	coins.forEach(function (coin) {
		const coinCard = createCoinCard(coin);
		// Append the coin card to the cards wrapper
		cardsWrapperEl.append(coinCard);
	});

	// Append the coin card to the parent element
	parentElement.append(cardsWrapperEl);
}

// Call the displayCoins() function to start the process
displayCoins();



