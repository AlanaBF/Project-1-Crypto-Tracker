const API_KEY = 'db60a21bf6msh0c7c9e1851c4408p1d3b11jsnca09255a288c';
const baseUrl = 'https://coinranking1.p.rapidapi.com/';

// Function to retrieve a list of coins with a specified limit
async function getListOfCoins(limit = 10) {
	// Set the settings for the API call
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

	// Use the $.ajax method to make the API call, wrapped in a try-catch block
	try {
		return await $.ajax(settings);
	} catch (error) {
		// Return the error if the API call fails
		return error;
	}

}

// Function to retrieve information for a specific coin by its UUID
async function getOneCoin(UUID) {
	// Set the parameters for the API call
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

	// Use the $.ajax method to make the API call, wrapped in a try-catch block
	try {
		return await $.ajax(parameters);
	} catch (error) {
		// Return the error if the API call fails
		return error;
	}
}

// Function to retrieve information for a specific coin for use in a chart
async function getCoinPriceHistory(UUID) {
	// Set the settings for the API call
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

	// Use the $.ajax method to make the API call, wrapped in a try-catch block
	try {
		return await $.ajax(settings);
	} catch (error) {
		// Return the error if the API call fails
		return error;
	}
}

