function getListOfCoins() {
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

	return $.ajax(settings).then(function (response) {
		console.log(response);
	})
}

//Get specific coin by its UUID
function getOneCoin() {
var UUID = '';
const parameters = {
	"async": true,
	"crossDomain": true,
	"url": `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd?referenceCurrencyUuid=${UUID}&timePeriod=24h`,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c",
		"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
	}
};

$.ajax(parameters).done(function (response) {
	console.log(response);
});
}
getListOfCoins();

//Get iformation for the chart
function getCoinPriceHistory () {
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c",
			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}
