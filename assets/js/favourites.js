// Define an asynchronous function that will display a list of coins
async function displayCoins() {
  let response;

  try {
    // Make an API call using the getListOfCoins function
    response = await getListOfCoins(100);
  } catch (error) {
    // If the API call fails, log an error message to the console for debugging purposes
    console.error('An error occurred while fetching the data from the API: ', error.responseJSON.message);
  }

  // Call the renderFavourites function, passing in the list of coins from the API response
  renderFavourites(response.data.coins);
}

// Define a function to render the list of favourite coins
function renderFavourites(coins) {
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
    //adds the title when there are coins selected on favourites
    addHeading();
    $('#favouritesContainer').on("click", '.fav-link', () => renderFavourites(coins));
    $('#favouritesContainer .cardsWrapper').attr('class', 'wraping');
  } else {
    // If there are no favourite coins, display a jumbotron to the user
    $('.jumbo-2').removeClass('hide');
  }

}

// Call the displayCoins function to start the process
displayCoins();

//render section title on favourites
function addHeading() {
  var h2 = $('<h2 class="fav-heading">');
  h2.text('My Favourite Cryptocurrencies');
  $('#favouritesContainer').prepend(h2);
}