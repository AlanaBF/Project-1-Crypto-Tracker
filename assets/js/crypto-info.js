// GET coin call response
let response = {
    "status": "success",
    "data": {
      "coin": {
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "description": "<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n",
        "color": "#f7931A",
        "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        "websiteUrl": "https://bitcoin.org",
        "links": [
          {
            "name": "bitcoin.org",
            "type": "website",
            "url": "https://bitcoin.org"
          },
          {
            "name": "bitcoinmagazine.com",
            "url": "https://bitcoinmagazine.com/",
            "type": "website"
          },
          {
            "name": "bitcointalk.org",
            "url": "https://bitcointalk.org/",
            "type": "bitcointalk"
          },
          {
            "name": "blockchain.com",
            "url": "https://www.blockchain.com/explorer",
            "type": "explorer"
          },
          {
            "name": "bitcoin/bitcoin",
            "url": "https://github.com/bitcoin/bitcoin",
            "type": "github"
          },
          {
            "name": "r/bitcoin",
            "url": "https://www.reddit.com/r/bitcoin/",
            "type": "reddit"
          },
          {
            "name": "Bitcoin_Magazine",
            "url": "https://t.me/Bitcoin_Magazine",
            "type": "telegram"
          },
          {
            "name": "bitcoin",
            "url": "https://t.me/bitcoin",
            "type": "telegram"
          },
          {
            "name": "Bitcoin Whitepaper",
            "url": "https://bitcoin.org/bitcoin.pdf",
            "type": "whitepaper"
          }
        ],
        "supply": {
          "confirmed": true,
          "supplyAt": 1669711321,
          "max": "21000000",
          "total": "19219662",
          "circulating": "19219662"
        },
        "numberOfMarkets": 4167,
        "numberOfExchanges": 146,
        "24hVolume": "28986250671",
        "marketCap": "457888727288",
        "fullyDilutedMarketCap": "500303453466",
        "price": "23823.973974569188",
        "btcPrice": "1",
        "priceAt": 1675341120,
        "change": "3.19",
        "rank": 1,
        "sparkline": [
          "23087.57588692106",
          "23102.724068011128",
          "23097.327966437417",
          "23056.581213581736",
          "23031.63580794844",
          "23027.687956214566",
          "23043.29228565155",
          "23228.950522247058",
          "23493.629349299772",
          "23634.216102226987",
          "23684.192027620185",
          "23708.142405555576",
          "23957.46741870307",
          "23948.695485026725",
          "23906.660619280035",
          "23894.59488567021",
          "23892.488058660165",
          "23870.542697021832",
          "23810.246470329148",
          "23814.94524160122",
          "23815.085486076478",
          "23800.36663521708",
          "23811.87734236913",
          "23809.874323414417",
          "23821.915926606118"
        ],
        "allTimeHigh": {
          "price": "68763.41083248306",
          "timestamp": 1636502400
        },
        "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "tier": 1,
        "lowVolume": false,
        "listedAt": 1330214400,
        "hasContent": true,
        "notices": null,
        "tags": [
          "layer-1",
          "proof-of-work"
        ]
      }
    }
  }


// TODO: Get list of what extra info I want to have about the specific coin

// TODO: Write function that takes as parameters the response objects/json then creates card that will contains all the information.

// TODO: Add functionality which takes the raw data, parses it and builds a section containing all of that data nicely arranged and styled ready to be used.

// this is basic lay out of the additional info card
//! coin info:
//!     {COIN} Value Statistics - GET coin
//!     an overview showing the statistics of the {COIN} - GET coin
//!
//!     {icon} Price to USD - ${PRICE} - GET coin
//!     {icon} Rank - {RANK} - GET coin
//!     {icon} 24h Volume - {VOLUME} - GET coin
//!     {icon} Market Cap - {MARKETCAP} - GET coin
//!     {icon} All-Time-High - {ALL-TIME-HIGH} - GET coin

function renderAdditionalInfo(getCoinResponse) {

    const titleElm = document.createElement("h2");
    const descriptonElm = document.createElement("p");
    const priceElm = document.createElement("p");
    const rankElm = document.createElement("p");
    const volumeElm = document.createElement("p");
    const marketCapElm = document.createElement("p");
    const timeHighElm = document.createElement("p");



    let coin;
    let coinPrice;
    let coinRank;
    let coin24hVolume;
    let coinMarketCap;
    let coinAllTimeHigh;



};