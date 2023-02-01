async function getListOfAllCoins() {
	//Get a list of coins 
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c",
			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
		}
	};

	const response = await $.ajax(settings).then(function (response) {
		return response
        console.log(response);
	})
    return response
    
}


function createCoinCard(name, price, change) {
    const coinCard = 
    `
    <div class="card">
    <h2>Currency ${name}</h2>
    <p>Price $${price}</p>
    <p>Daily Change ${change}</p>
    </div>
    `
return coinCard;
}

function renderCoinCards(coins) {
    
coins.forEach(function(coin) {
const coinCardEl = createCoinCard(coin.name, coin.price, coin.change)
$("#top10").append(coinCardEl)

})


}

var response = getListOfAllCoins();
console.log(response);



