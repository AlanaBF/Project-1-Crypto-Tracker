var apiKey = 'CRWFZih4W5K9yNqks-K1TKKYuTVM1ZWaxHEQREWzZ7U';
var newsTop10 = $('#topNews');

function getCryptoNews(query, limit = 10) {
	$.ajax({
        url: `https://api.newscatcherapi.com/v2/search?q=${query}&countries=GB&page_size=${limit}&topic=finance&sources=coindesk.com`,
        method: 'GET',
        headers: {
            'x-api-key': apiKey
          }
    }).then(function(res) {
        console.log(res);
        console.log(res.articles.length);
        
    })
}
getCryptoNews('Cryptocurrency');

//Get the latest news for crypto coins
//Generate 10 cards that uses that information - each one with a diferent article

//For each card
//Title = res.articles[i].title;
//Summary = res.articles[i].summary
//Author = 
//On click - link to article - redirect page = res.articles[i].link

//For each article, add a card; res.articles.length.
function createNewsCards(res) {
        for( var i = 0; i < articles.length; i++) {
            var link = articles[i].link;
            var linkwraper = $(`<a class="link-news-card" href="${link}">`);
            var cardNew = $('<div class="card-new">');
            var title = $('<h4 class="card-new-title">');
            var summary = $('<p class="card-new-title">');
            var author = $('<p class="card-new-title">');
            linkwraper.append(cardNew);
            title.text(articles[i].title);
            summary.text(articles[i].summary);
            author.text(articles[i].author);
            cardNew.attr('src', link); //on click go to the link
            //cardNew.click(()=> {
            //     window.location.replace(link);
            // })
            cardNew.append(title);
            cardNew.append(summary);
            cardNew.append(author);
            newsTop10.append(linkwraper);
        }
}

// var response  = {{
//     "status": "ok",
//     "total_hits": 13,
//     "page": 1,
//     "total_pages": 5,
//     "page_size": 3,
//     "articles": [
//         {
//             "title": "Bitcoin Price Could Reach $45,000 by Christmas 2023: Matrixport",
//             "author": "Will Canny",
//             "published_date": "2023-02-01 08:32:27",
//             "published_date_precision": "full",
//             "link": "https://www.coindesk.com/markets/2023/02/01/bitcoin-price-could-reach-45000-by-christmas-2023-matrixport/",
//             "clean_url": "coindesk.com",
//             "excerpt": "When bitcoin's performance is positive in January, the rally tends to continue, the report said.",
//             "summary": "U.S. institutions have probably been behind January's rally in bitcoin (BTC), which saw the cryptocurrency gain more than 38%, and an outperformance this early in the year tends to be bullish for the token's price, crypto services provider Matrixport said in a research report Wednesday.In five of the six years that bitcoin has rallied in January, the cryptocurrency has ended the year with positive returns. On average, the gain the rest of the year has been more than 245%, wrote Markus Thielen, head of research.",
//             "rights": "coindesk.com",
//             "rank": 1153,
//             "topic": "finance",
//             "country": "US",
//             "language": "en",
//             "authors": "CoinDesk,Will Canny",
//             "media": "https://www.coindesk.com/resizer/HyI0rp0m-LanKgNsf6kvwIFajB4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ASMMKWCMFFGR5I6TVQMFFUG4SI.jpg",
//             "is_opinion": false,
//             "twitter_account": "@coindesk",
//             "_score": 10.39468,
//             "_id": "eb0c136d0b820b9608ce0071cbb11e76"
//         }}] }}

const articles = [
            {
                "title": "Bitcoin Price Could Reach $45,000 by Christmas 2023: Matrixport",
                "author": "Will Canny",
                "published_date": "2023-02-01 08:32:27",
                "published_date_precision": "full",
                "link": "https://www.coindesk.com/markets/2023/02/01/bitcoin-price-could-reach-45000-by-christmas-2023-matrixport/",
                "clean_url": "coindesk.com",
                "excerpt": "When bitcoin's performance is positive in January, the rally tends to continue, the report said.",
                "summary": "U.S. institutions have probably been behind January's rally in bitcoin (BTC), which saw the cryptocurrency gain more than 38%, and an outperformance this early in the year tends to be bullish for the token's price, crypto services provider Matrixport said in a research report Wednesday.In five of the six years that bitcoin has rallied in January, the cryptocurrency has ended the year with positive returns. On average, the gain the rest of the year has been more than 245%, wrote Markus Thielen, head of research.",
                "rights": "coindesk.com",
                "rank": 1153,
                "topic": "finance",
                "country": "US",
                "language": "en",
                "authors": "CoinDesk,Will Canny",
                "media": "https://www.coindesk.com/resizer/HyI0rp0m-LanKgNsf6kvwIFajB4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ASMMKWCMFFGR5I6TVQMFFUG4SI.jpg",
                "is_opinion": false,
                "twitter_account": "@coindesk",
                "_score": 10.39468,
                "_id": "eb0c136d0b820b9608ce0071cbb11e76"
            },
            {
                "title": "Bitcoin Price Could Reach $45,000 by Christmas 2023: Matrixport",
                "author": "Will Canny",
                "published_date": "2023-02-01 08:32:27",
                "published_date_precision": "full",
                "link": "https://www.coindesk.com/markets/2023/02/01/bitcoin-price-could-reach-45000-by-christmas-2023-matrixport/",
                "clean_url": "coindesk.com",
                "excerpt": "When bitcoin's performance is positive in January, the rally tends to continue, the report said.",
                "summary": "U.S. institutions have probably been behind January's rally in bitcoin (BTC), which saw the cryptocurrency gain more than 38%, and an outperformance this early in the year tends to be bullish for the token's price, crypto services provider Matrixport said in a research report Wednesday.In five of the six years that bitcoin has rallied in January, the cryptocurrency has ended the year with positive returns. On average, the gain the rest of the year has been more than 245%, wrote Markus Thielen, head of research.",
                "rights": "coindesk.com",
                "rank": 1153,
                "topic": "finance",
                "country": "US",
                "language": "en",
                "authors": "CoinDesk,Will Canny",
                "media": "https://www.coindesk.com/resizer/HyI0rp0m-LanKgNsf6kvwIFajB4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ASMMKWCMFFGR5I6TVQMFFUG4SI.jpg",
                "is_opinion": false,
                "twitter_account": "@coindesk",
                "_score": 10.39468,
                "_id": "eb0c136d0b820b9608ce0071cbb11e76"
            },
            {
                "title": "Bitcoin Price Could Reach $45,000 by Christmas 2023: Matrixport",
                "author": "Will Canny",
                "published_date": "2023-02-01 08:32:27",
                "published_date_precision": "full",
                "link": "https://www.coindesk.com/markets/2023/02/01/bitcoin-price-could-reach-45000-by-christmas-2023-matrixport/",
                "clean_url": "coindesk.com",
                "excerpt": "When bitcoin's performance is positive in January, the rally tends to continue, the report said.",
                "summary": "U.S. institutions have probably been behind January's rally in bitcoin (BTC), which saw the cryptocurrency gain more than 38%, and an outperformance this early in the year tends to be bullish for the token's price, crypto services provider Matrixport said in a research report Wednesday.In five of the six years that bitcoin has rallied in January, the cryptocurrency has ended the year with positive returns. On average, the gain the rest of the year has been more than 245%, wrote Markus Thielen, head of research.",
                "rights": "coindesk.com",
                "rank": 1153,
                "topic": "finance",
                "country": "US",
                "language": "en",
                "authors": "CoinDesk,Will Canny",
                "media": "https://www.coindesk.com/resizer/HyI0rp0m-LanKgNsf6kvwIFajB4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ASMMKWCMFFGR5I6TVQMFFUG4SI.jpg",
                "is_opinion": false,
                "twitter_account": "@coindesk",
                "_score": 10.39468,
                "_id": "eb0c136d0b820b9608ce0071cbb11e76"
            }]

createNewsCards(articles);
