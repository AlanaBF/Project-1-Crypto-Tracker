// This function needs the response object/json of historic coin prices and the id of a canvas element
// We need this element where ever we want a chart:
//! <canvas id="{WHATEVER-ID-WE-GIVE-IT}"></canvas>
// The chart will apper inside that element

function drawGraph(responseArray, canvasId) {
    // Initialising arrays for dates and coin prices
    let labelDates = [];
    let priceDataSets = [];

    for (let i = 0; i < responseArray.data.history.length; i++) {
        priceDataSets.push(responseArray.data.history[i].price);

        // Converting UTC seconds to normal date - https://java2blog.com/convert-epoch-time-to-date-javascript/
        let utcSeconds = responseArray.data.history[i].timestamp;
        let date = new Date(utcSeconds * 1000).toLocaleDateString("en-uk");
        labelDates.push(date);
    };

    // This is what is needed to build the chart
    let canvas = document.getElementById(canvasId);
    let context = canvas.getContext('2d');

    // This makes a mad line chart
    new Chart(context, {
        type: 'line',
        data: {
            labels: labelDates.reverse(),
            datasets: [
                {
                    label: 'Price in USD',
                    data: priceDataSets.reverse(),
                    fill: false,
                    backgroundColor: 'rgba(50, 44, 86, 0.6)',
                    borderColor: 'rgba(50, 44, 86, 0.6)',
                    tension: 0.1,
                    borderWidth: 2,
                    pointRadius: 0,
                }
            ]
        }
    });
};