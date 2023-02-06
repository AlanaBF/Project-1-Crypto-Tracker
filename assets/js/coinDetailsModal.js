
const uuid = 'Qwsogvtv82FCd';

// displayCoinDetails();
async function displayCoinDetails(uuid) {

  const coinHistoryRes = await getCoinPriceHistory(uuid);
  const coinDetailsRes = await getOneCoin(uuid);

  await $('body').prepend(createCoinModal(coinDetailsRes.data.coin));
  drawGraph(coinHistoryRes, 'chart')

  document.body.addEventListener('click', closeModal);
}

function createCoinModal(coin) {
  const { name, symbol, description } = coin;
  let formatter = Intl.NumberFormat('en', { notation: 'compact' });

  const coinModal = `
  <div class="coin-modal" id="coinModal">
      <div class="coin-modal-inner" id="coinModalInner">
        <i class="far fa-times-circle closeIcon"></i>
          <div class="coin-modal-header">
              <h1>${name} (${symbol}) </h1>
              <p>
              ${name} live price in US Dollars. View value statistic, market cap and supply.
              </p>
            <div class="chart-wrapper">
              <h4>${name} Price History</h4>
              <canvas role='img' id="chart"></canvas>
            </div>
          </div>
          <div id='modalInfo' class="coin-modal-info">
          ${createCoinStatsBlock(coin)}
          ${createOtherStatsBlock(coin)}
              <div class="statistics-block">
                <h2> What is ${name}</h2>
                ${description}
              </div>
              <div class="statistics-block">
              <h2> ${name} Links</h2>
            ${createCoinLinks(coin.links)}
            </div>
          </div>
      </div>
  </div>
`
  return coinModal;
}


function createCoinStatsBlock(coin) {
  const { name, price, rank, marketCap, allTimeHigh } = coin;

  return `
    <div class="statistics-block">
      <h2> ${name} Value Statisstics</h2>
      <span class='subtitle'>An overview showing the statistics of the Bitcoin</span>
      <div class='info'><p>Price to USD:</p> <span>$${Number(price).toFixed(2)}</span></div>
      <div class='info'><p>Rank: </p> <span>${rank}</span></div>
      <div class='info'><p>24h Volume:</p> <span>$${formatter.format(coin['24hVolume'])}</span></div>
      <div class='info'><p>Market cap:</p> <span>$${formatter.format(marketCap)}</span></div>
      <div class='info'><p>All-time-high(daily avg.):</p> <span>$${Number(allTimeHigh.price).toFixed(2)}</span></div>
    </div>
`
}

function createOtherStatsBlock(coin) {
  const { numberOfMarkets, numberOfExchanges, supply } = coin;

  return `
    <div class="statistics-block">
      <h2> Other Statisstics</h2>
      <span class='subtitle'>An overview showing the statistics of the Bitcoin</span>
      <div class='info'><p>Number Of Markets:</p> <span>${numberOfMarkets}</span></div>
      <div class='info'><p>Number Of Exchanges: </p> <span>${numberOfExchanges}</span></div>
      <div class='info'><p>Aprroved Supply:</p> <span>${supply.confirmed ? 'Yes' : 'No'}</span></div>
      <div class='info'><p>Market cap:</p> <span>$${formatter.format(supply.total)}</span></div>
      <div class='info'><p>Max Supply:</p> <span>$${formatter.format(supply.max)}</span></div>
    </div>
    `
}

function createCoinLinks(links) {
  let cards = '';

  links.forEach(link => {
    const { type, url, name } = link;

    cards += `
        <div class='info'>
          <p>${type}</p>
          <a href='${url}' target='_blank ref='no-referrer'>${name}</a>
        </div>
        `
  });
  return cards;
}


function closeModal(e) {
  if (e.target.classList.contains('closeIcon') || !e.target.closest('#coinModalInner')) {
    $('body').removeClass('fixed');
    document.body.removeEventListener('click', closeModal);
    $('#coinModal').remove();
  }
}