// This is basic lay out of the additional info card
//! coin info:
//!     {COIN} Value Statistics - GET coin
//!     an overview showing the statistics of the {COIN} - GET coin
//!     {icon} Price to USD - ${PRICE} - GET coin
//!     {icon} Rank - {RANK} - GET coin
//!     {icon} 24h Volume - {VOLUME} - GET coin
//!     {icon} Market Cap - {MARKETCAP} - GET coin
//!     {icon} All-Time-High - {ALL-TIME-HIGH} - GET coin

// This function takes 2 parameters, the response of calling GET coin and ID of a container you want all of the information to render.
// All elements have id attached to them to allow easier manipulation.

function renderAdditionalInfo(getCoinResponse, containerDivId) {

    // Variables containing values pulled out of he GET coin response
    let coin = getCoinResponse.data.coin.name;
    let coinPrice = getCoinResponse.data.coin.price;
    let coinRank = getCoinResponse.data.coin.rank;
    let coin24hVolume = getCoinResponse.data.coin["24hVolume"];
    let coinMarketCap = getCoinResponse.data.coin.marketCap;
    let coinAllTimeHigh = getCoinResponse.data.coin.allTimeHigh.price;

    // Creating title elements
    const titleContainerElm = $("<div>").attr('id', 'titleContainer').attr('style', 'display: flex; justify-content: space-between');
    const titleElm = $("<div>").attr('id', 'title').text(`This is the coin name`);
    const titleValueElm = $("<div>").attr('id', 'titleValue').text(`${coin}`);

    // Creating description elements
    const descriptonContainerElm = $("<div>").attr('id', 'descriptonContainer').attr('style', 'display: flex; justify-content: space-between');
    const descriptonElm = $("<div>").attr('id', 'description').text(`This is description for`);
    const descriptonValueElm = $("<div>").attr('id', 'descriptionValue').text(`${coin}`);

    // Creating price elements
    const priceContainerElm = $("<div>").attr('id', 'priceContainer').attr('style', 'display: flex; justify-content: space-between');
    const priceElm = $("<div>").attr('id', 'price').text(`Price to USD`);
    const priceValueElm = $("<div>").attr('id', 'priceValue').text(`$${coinPrice}`);

    // Creating rank elements
    const rankContainerElm = $("<div>").attr('id', 'rankContainer').attr('style', 'display: flex; justify-content: space-between');
    const rankElm = $("<div>").attr('id', 'rank').text(`This is the coin rank`);
    const rankValueElm = $("<div>").attr('id', 'rankValue').text(`${coinRank}`);

    // Creating volume elements
    const volumeContainerElm = $("<div>").attr('id', 'volumeContainer').attr('style', 'display: flex; justify-content: space-between');
    const volumeElm = $("<div>").attr('id', 'volume').text(`This is the coin 24h volume`);
    const volumeValueElm = $("<div>").attr('id', 'volumeValue').text(`${coin24hVolume}`);

    // Creating market cap elements
    const marketCapContainerElm = $("<div>").attr('id', 'marketCapContainer').attr('style', 'display: flex; justify-content: space-between');
    const marketCapElm = $("<div>").attr('id', 'marketCap').text(`This is the coin market cap`);
    const marketCapValueElm = $("<div>").attr('id', 'marketCapValue').text(`$${coinMarketCap}`);

    // Creating all time high elements
    const timeHighContainerElm = $("<div>").attr('id', 'timeHighContainer').attr('style', 'display: flex; justify-content: space-between');
    const timeHighElm = $("<div>").attr('id', 'timeHigh').text(`This is the all time high`);
    const timeHighValueElm = $("<div>").attr('id', 'timeHigh').text(`$${coinAllTimeHigh}`);

    // Title part
    containerDivId.append(titleContainerElm);
    titleContainerElm.append(titleElm).append(titleValueElm);

    // Description part
    containerDivId.append(descriptonContainerElm);
    descriptonContainerElm.append(descriptonElm).append(descriptonValueElm)

    // Price part
    containerDivId.append(priceContainerElm);
    priceContainerElm.append(priceElm).append(priceValueElm);

    // Rank part
    containerDivId.append(rankContainerElm);
    rankContainerElm.append(rankElm).append(rankValueElm);

    // Volume part
    containerDivId.append(volumeContainerElm);
    volumeContainerElm.append(volumeElm).append(volumeValueElm);

    // Market-cap part
    containerDivId.append(marketCapContainerElm);
    marketCapContainerElm.append(marketCapElm).append(marketCapValueElm);

    // All time high part
    containerDivId.append(timeHighContainerElm);
    timeHighContainerElm.append(timeHighElm).append(timeHighValueElm);

};