var apiKey = 'Qcn4TM2kXRl7zL-tJSSvYVhRQRb3IpXxDihJyjtvF4I';

function getCryptoNews(query) {
	$.ajax({
        url: `https://api.newscatcherapi.com/v2/search?q=${query}&lang=en`,
        method: 'GET',
        headers: {
            'x-api-key': apiKey
          }
    }).then(function(res) {
        console.log(res)
    })
}
getCryptoNews('Bitcoin');