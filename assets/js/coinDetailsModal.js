
const uuid = 'Qwsogvtv82FCd';

async function displayCoinDetails() {

  const coinHistoryRes = await getCoinPriceHistory(uuid);
  const coinDetailsRes = await getOneCoin(uuid);

  await $('body').prepend(createCoinModal(coinDetailsRes.data.coin));
  drawGraph(coinHistoryRes, 'chart')

  console.log(coinDetailsRes)


}

displayCoinDetails();

function createCoinModal(coin) {
  const { name, symbol, price, rank, marketCap, allTimeHigh } = coin;
  let formatter = Intl.NumberFormat('en', { notation: 'compact' });

  const coinModal = `
<div class="coin-modal" id="coinModal">
    <div class="coin-modal-inner" id="coinModalInner">
        <div class="coin-modal-header">
            <h2>${name} (${symbol}) </h2>
            <p>
            ${name} live price in US Dollars. View value statistic, market cap and supply.
            </p>
           <div class="chart-wrapper">
            <h4>${name} Price History</h4>
            <canvas role='img' id="chart"></canvas>
           </div>
        </div>
        <div class="coin-modal-info">
            <div class="statistics-block">
              <p>An overview showing the statistics of the Bitcoin</p>
              <p>Price to USD: $${Number(price).toFixed(2)}</p>
              <p>Rank: ${rank}</p>
              <p>24h Volume: $${formatter.format(coin['24hVolume'])}</p>
              <p>Market cap: $${formatter.format(marketCap)}</p>
              <p>All-time-high(daily avg.): $${Number(allTimeHigh.price).toFixed(2)}</p>
            </div>
            <div class="statistics-block">
              <p>An overview showing the statistics of the Bitcoin</p>
              <p>Price to USD: $${Number(price).toFixed(2)}</p>
              <p>Rank: ${rank}</p>
              <p>24h Volume: $${formatter.format(coin['24hVolume'])}</p>
              <p>Market cap: $${formatter.format(marketCap)}</p>
              <p>All-time-high(daily avg.): $${Number(allTimeHigh.price).toFixed(2)}</p>
            </div>
        </div>
    </div>
</div>
`
  return coinModal;
}

