async function displayAllCoins() {
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

displayAllCoins();

$('seacrh-form').on('submit', function(e){
  e.preventDefault();
});