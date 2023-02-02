async function displayAllCoins() {
  try {
    // Get data from API by calling the getListOfCoins() function
    const response = await getListOfCoins(100);
    displaySearchedResults(response.data.coins);
    // Render 100 coin cards by passing the coins and parent element to the renderCoinCards() function
    renderCoinCards(response.data.coins, $("#cardsContainer"));
  } catch (error) {
    // Display an error message to the end-user if the API call fails
    console.error('An error occurred while fetching the data from the API: ', error.responseJSON.message);
  }
}

displayAllCoins();


function displaySearchedResults(coins) {
  let filtered = [];

  $('#search-form').on('submit', function (e) {
    e.preventDefault()
    $("#cardsContainer").empty();
    const query = $('#search-input').val().trim().toLowerCase();

    if (!query) {
      renderCoinCards(coins, $("#cardsContainer"));
      return
    }

    filtered = coins.filter(coin => {
      return coin.name.toLowerCase().includes(query)
        || coin.symbol.toLowerCase().includes(query);
    });

    if (filtered.length) {
      renderCoinCards(filtered, $("#cardsContainer"));
    } else {
      $("#cardsContainer").text('No coins found matching the criteria..')
    }
  });
}