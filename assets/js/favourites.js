// Define an asynchronous function that will display a list of coins
async function displayCoins() {
  try {
    // Make an API call using the getListOfCoins function
    // Pass 100 as an argument to the function to limit response by 100 coins
    const response = await getListOfCoins(100);

    // Call the renderFavourites function, passing in the list of coins from the API response
    renderFavourites(response.data.coins);

  } catch (error) {
    // If the API call fails, log an error message to the console for debugging purposes
    console.error('An error occurred while fetching the data from the API: ', error.responseJSON.message);
  }
}

// Define a function to render the list of favourite coins
function renderFavourites(coins) {
  checkLocalStorage();
  // Get the list of favourite coins UUIDs from local storage, or an empty array if it doesn't exist
  const favouritesUuids = JSON.parse(localStorage.getItem('favourites')) || [];

  // Filter the list of all coins to only include those that are marked as favourites
  const filteredFavourites = coins.filter(coin => favouritesUuids.includes(coin.uuid));

  // Empty the favourites container from previous render
  $('#favouritesContainer').empty();

  // Render the filtered list of favourite coins
  renderCoinCards(filteredFavourites, $("#favouritesContainer"));

  // If there are any favourite coins, add a click event to the container
  // This event will re-render the favourites when a coin card is clicked (Delegated to parrent container)
  if (filteredFavourites.length) {
    $('#favouritesContainer').on("click", '.fav-link', () => renderFavourites(coins));
  } else {
    // If there are no favourite coins, display a message to the user
    $('#favouritesContainer').text("Hmm.. Looks like you don't have any favourite coins yet..")
  }

}

// Call the displayCoins function to start the process
displayCoins();
