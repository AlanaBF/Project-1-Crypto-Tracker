// var apiKey = 'CRWFZih4W5K9yNqks-K1TKKYuTVM1ZWaxHEQREWzZ7U';
var newsTop10 = $('#topNews');
var newsSectionCards = $('#cardsNewsContainer');
var newsSectionInput = $('#search-news-input');
var newsSectionButton = $('#search-news-button');
var error = $('#error');

const emergencyArticles = {
    "status": "ok",
    "total_hits": 12,
    "page": 1,
    "total_pages": 3,
    "page_size": 4,
    "articles": [
        {
            "title": "Payments Company Affirm Is Shutting Down Its Crypto Business",
            "author": "Helene Braun",
            "published_date": "2023-02-08 21:32:26",
            "published_date_precision": "full",
            "link": "https://www.coindesk.com/business/2023/02/08/affirm-shuts-down-crypto-business/",
            "clean_url": "coindesk.com",
            "excerpt": "During the bull market of 2021, Affirm had joined a number of fintech firms in offering clientele the ability to buy and sell crypto.",
            "summary": "Payment network Affirm (AFRM) is shutting down the cryptocurrency service it started in 2021, according to a letter to \nshareholders\n on Wednesday.\nAffirm Crypto will close on March 2. The shutdown is part of a larger retrenchment for the company, which also announced it would eliminate 19% of its workforce. It's unclear what proportion of those layoffs are related to the crypto operation.\n'Concurrent with reducing our workforce, we are sunsetting several initiatives, such as Affirm Crypto,' CEO Max Levchin said in the letter.",
            "rights": "coindesk.com",
            "rank": 1153,
            "topic": "finance",
            "country": "US",
            "language": "en",
            "authors": "CoinDesk,Helene Braun",
            "media": "https://www.coindesk.com/resizer/S8C4FVlmFMmYFIEq8s3imycOL5I=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LOFOFUJUAVBOVHYORRNZ3VJOFY.jpg",
            "is_opinion": false,
            "twitter_account": "@coindesk",
            "_score": 12.049438,
            "_id": "001063ed2190f7ae671507fa853a8f45"
        },
        {
            "title": "Coinbase Shares Soar as Crypto-Related Stocks Continue Post-Fed Rally",
            "author": "Helene Braun",
            "published_date": "2023-02-02 17:24:51",
            "published_date_precision": "full",
            "link": "https://www.coindesk.com/business/2023/02/02/coinbase-leads-as-crypto-related-stocks-continue-post-fed-rally/",
            "clean_url": "coindesk.com",
            "excerpt": "Barclays analyst said Coinbase volumes rose 56% in January from the previous month.",
            "summary": "Shares of crypto exchange Coinbase (COIN) jumped more than 20% on Thursday after the Federal Reserve's latest interest rate hike and Fed Chair Jerome Powell noted progress in fighting the high rate of inflation.The U.S.-based exchange also got a boost after it won a dismissal on Wednesday of a proposed class-action lawsuit by customers who claimed Coinbase sold them unregistered securities.The company's stock is up more than 100% this year as the crypto industry started recovering from the FTX exchange's collapse.",
            "rights": "coindesk.com",
            "rank": 1153,
            "topic": "finance",
            "country": "US",
            "language": "en",
            "authors": "Aoyon Ashraf,CoinDesk,Helene Braun",
            "media": "https://www.coindesk.com/resizer/kqsruLzk3Gu9njw-DlmKzzZUgt8=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HSPMLPYQFFCY7PI4JGKPNKEJ6Q.png",
            "is_opinion": false,
            "twitter_account": "@coindesk",
            "_score": 11.733579,
            "_id": "92eb11ae93d369deb4d058c50d1ea4c4"
        },
        {
            "title": "Binance APAC Head Suggests Full Audit of the Crypto Exchange Isn't Happening Soon: Bloomberg",
            "author": "Jamie Crawley",
            "published_date": "2023-02-08 11:13:03",
            "published_date_precision": "full",
            "link": "https://www.coindesk.com/business/2023/02/08/binance-apac-head-suggests-full-audit-of-the-crypto-exchange-isnt-happening-soon-bloomberg/",
            "clean_url": "coindesk.com",
            "excerpt": "Finding an auditor for the whole balance sheet is difficult given the complexities of auditing crypto assets due to challenges like price volatility.",
            "summary": "A full audit of Binance's assets and liabilities may be some way off, the crypto exchange's head of Asia-Pacific said \nin an interview with Bloomberg\n.\nFinding an auditor to go over the whole balance sheet is difficult given the complexities of auditing crypto assets due to challenges like price volatility, Leon Foong said in the interview.\n'It shows you the limitations of the more traditional industries because there is a learning curve,\" he said. \"Number one, it's not their core competence. And number two, obviously there's a lot of scrutiny if they get it wrong.",
            "rights": "coindesk.com",
            "rank": 1153,
            "topic": "finance",
            "country": "US",
            "language": "en",
            "authors": "CoinDesk,Jamie Crawley",
            "media": "https://www.coindesk.com/resizer/sLmntk1RJcxsPCWOznno7PSay8E=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/OGJVKCE2TZBHBMV5OJ2VPWF3U4.jpg",
            "is_opinion": false,
            "twitter_account": "@coindesk",
            "_score": 11.69601,
            "_id": "9dc2426d0c540b094380405d2d7d4e67"
        },
        {
            "title": "Crypto Classification Seeks to Make Industry More Welcoming to TradFi Participants",
            "author": "Jamie Crawley",
            "published_date": "2023-02-08 13:00:00",
            "published_date_precision": "full",
            "link": "https://www.coindesk.com/business/2023/02/08/crypto-classification-seeks-to-make-industry-more-welcoming-to-tradfi-participants/",
            "clean_url": "coindesk.com",
            "excerpt": "Cryptocurrency is an incredibly broad and diverse field, with a huge array of wholly different assets, making the industry an intimidating one to enter.",
            "summary": "Cryptocurrency data provider CoinGecko and \n21.co\n, the parent firm of investment product provider 21Shares, are rolling out a classification system for crypto assets, the latest in a growing number of efforts to map the taxonomy of the industry and make it more accessible for participants in traditional finance (TradFi).\nThe Global Crypto Classification Standard, announced Wednesday, categorizes digital assets according to three levels. It joins a classification system called \ndatonomy\n, constructed by financial services behemoths Goldman Sachs (GS) and MSCI (MSCI) with data provider Coin Metrics, and the \nDigital Assets Classification Standard (DACS)\n from \nCoinDesk Indices\n that classifies the top 500 digital assets by market capitalization into use case and technology and then into industry and sector.",
            "rights": "coindesk.com",
            "rank": 1153,
            "topic": "finance",
            "country": "US",
            "language": "en",
            "authors": "CoinDesk,Jamie Crawley",
            "media": "https://www.coindesk.com/resizer/jqDDWN3gAwmFZZUZizqKGiPZmPc=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HSXYRQNVNJHDDJLSXMVSANLVMI.jpg",
            "is_opinion": false,
            "twitter_account": "@coindesk",
            "_score": 11.695603,
            "_id": "1e940e80f6c60f78fb951e538912ff1f"
        }
    ],
    "user_input": {
        "q": "crypto",
        "search_in": [
            "title_summary"
        ],
        "lang": null,
        "not_lang": null,
        "countries": [
            "GB"
        ],
        "not_countries": null,
        "from": "2023-02-02 00:00:00",
        "to": null,
        "ranked_only": "True",
        "from_rank": null,
        "to_rank": null,
        "sort_by": "relevancy",
        "page": 1,
        "size": 4,
        "sources": [
            "coindesk.com"
        ],
        "not_sources": null,
        "topic": "finance",
        "published_date_precision": null
    }
}

function getCryptoNews(query, limit = 10) {
	$.ajax({
        url: `https://api.newscatcherapi.com/v2/search?q=${query}&countries=GB&page_size=${limit}&topic=finance&sources=coindesk.com`,
        method: 'GET',
        headers: {
            'x-api-key': apiKey
          },
        error: function (xhr) {
        if (xhr.status == 401) {
            createNewsCards(emergencyArticles, newsTop10);
            createNewsCards(emergencyArticles, newsSectionCards);
        }
        }
    }).then(function(res) {
        console.log(res);
        console.log(res.articles.length);
        createNewsCards(res, newsTop10);
        createNewsCards(res, newsSectionCards);
    })
}
getCryptoNews('Cryptocurrency');

function getInputVal() {
    newsSectionButton.click(() => {
        var query = newsSectionInput.val().trim().toLowerCase();
        console.log(query);
        newsSectionCards.empty();
        if(query == '') {
            error.removeClass('hide');
        } else {
            error.addClass('hide'); 
            getCryptoNews(query)
            newsSectionInput.val('');
        } 
    })
}
getInputVal();
function createNewsCards(res, container) {
        for( var i = 0; i < res.articles.length; i++) {
            var link = res.articles[i].link;
            var img = res.articles[i].media;
            var linkwraper = $(`<a class="link-news-card" target="_blank" href="${link}">`);
            var cardNew = $('<div class="card-new bg">');
            var title = $('<h4 class="card-new-title">');
            var summary = $('<p class="card-new-summary">');
            var author = $('<p class="card-new-author">');
            var image = $('<img class= "card-new-img">');
            var middleWrap = $('<div class="card-middle-wrap">');
            title.text(res.articles[i].title);
            summary.text(res.articles[i].summary);
            author.text('-' + res.articles[i].author);
            image.attr('src', img);
            //cardNew.click(()=> {
            //     window.location.replace(link);
            // })
            middleWrap.append(image);
            middleWrap.append(summary);
            cardNew.append(title);
            cardNew.append(middleWrap);
            cardNew.append(author);
            linkwraper.append(cardNew);
            container.append(linkwraper);
        }
}




