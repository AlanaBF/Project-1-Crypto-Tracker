let isModalOpen = false;

async function displayCoinDetails(uuid) {
  showLoadingSpiner()
  const coinHistoryRes = await getCoinPriceHistory(uuid);
  const coinDetailsRes = await getOneCoin(uuid);

  hideLoadingSpinner()
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
              <div class="statistics-block links-block">
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
      <h2> ${name} Value Statistics</h2>
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
      <h2> Other Statistics</h2>
      <span class='subtitle'>An overview showing the statistics of the Bitcoin</span>
      <div class='info'><p>Number Of Markets:</p> <span>${numberOfMarkets}</span></div>
      <div class='info'><p>Number Of Exchanges: </p> <span>${numberOfExchanges}</span></div>
      <div class='info'><p>Approved Supply:</p> <span>${supply.confirmed ? 'Yes' : 'No'}</span></div>
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


//Function to open coinDetailModal with the info for clicked card
function openModal(e) {
  //If clicked on heart inside the card, or modal is already opened don't do anything. 
  if (e.target.classList.contains('fav-link') || isModalOpen) return
  //Change  modal flag status
  isModalOpen = true;
  //Get uuid from clicked card 
  const uuid = $(this).attr('data-uuid');
  //Add class to body to remove scroll 
  $('body').addClass("modal-open");
  //Open modal with info for the coin with this uuid
  displayCoinDetails(uuid);
}

// Function to close modal
function closeModal(e) {
  //Check if clicked outside modal or on close icon then run the code
  if (e.target.classList.contains('closeIcon') || !e.target.closest('#coinModalInner')) {
    //Change modal flag status
    isModalOpen = false;
    //Add scroll functionality for body element
    $('body').removeClass('modal-open');
    //Remove event listener as nmodal is closed
    document.body.removeEventListener('click', closeModal);
    //Remove modal from the page
    $('#coinModal').remove();
  }
}

