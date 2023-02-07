const API_KEY = 'db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c';
const baseUrl = 'https://coinranking1.p.rapidapi.com/';

//By default gets 10 top coins, but can be called with different limit
async function getListOfCoins(limit = 10) {
	//Get a list of coins 
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": `${baseUrl}coins/?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=${limit}&offset=0`,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": API_KEY,
			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
		}
	};

	try {
		return await $.ajax(settings);
	} catch (error) {
		return error;
	}

}

//Get specific coin by its UUID
async function getOneCoin(UUID) {

	const parameters = {
		"async": true,
		"crossDomain": true,
		"url": `${baseUrl}coin/${UUID}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": API_KEY,
			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
		}
	};

	try {
		return await $.ajax(parameters);
	} catch (error) {
		return error;
	}
}


//Get iformation for the chart
async function getCoinPriceHistory(UUID) {
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": `${baseUrl}coin/${UUID}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": API_KEY,
			"X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
		}
	};

	try {
		return await $.ajax(settings);
	} catch (error) {
		return error;
	}
}
