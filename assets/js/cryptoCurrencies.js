// The displayAllCoins function retrieves a list of coins from an API, 
// and displays them by calling the renderCoinCards function and passing the coins data and a parent element. 
// It also sets up a search functionality for the user by calling the addSearchFunctionality function. 
// The addSearchFunctionality function filters the coins based on the user's search query and re-renders the coins 
// that match the criteria, or displays a message if no matching coins are found. 


// Async function that displays all the coins by making an API call to get the list of coins and render the coin cards.
async function displayAllCoins() {
  try {
    // Get data from the API by calling the getListOfCoins() function
    const response = await getListOfCoins(100);
    const { coins } = response.data;

    // Render 100 coin cards by passing the coins and parent element to the renderCoinCards() function
    renderCoinCards(coins, $("#cardsContainer"));
    // After initial 100 coin cards are created, add search functionality 
    addSearchFunctionality(coins);
  } catch (error) {
    // Display an error message to the end-user if the API call fails
    console.error('An error occurred while fetching the data from the API: ', error.responseJSON.message);
  }
}

// Function that adds search functionality to the page.
function addSearchFunctionality(coins) {
  // Set up an event listener for the search form
  $('#search-form').on('submit', function (e) {
    // Prevent the default form submit behavior
    e.preventDefault();

    // Clear the existing coin cards from the container
    $("#cardsContainer").empty();

    // Get the user's search query and convert it to lowercase
    const query = $('#search-input').val().trim().toLowerCase();

    // If the query is empty, render all the coins
    if (!query) {
      renderCoinCards(coins, $("#cardsContainer"));
      return;
    }

    // Filter the coins based on the user's query
    const filtered = coins.filter(coin => (
      coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query)
    ));

    // If there are any filtered coins, render them, otherwise display an error message
    if (filtered.length) {
      renderCoinCards(filtered, $("#cardsContainer"));
    } else {
      $("#cardsContainer").text('Sorry, no coins were found that match your search criteria.');
    }
  });
}

// Call the displayAllCoins function to initiate the display of all coins
displayAllCoins();
