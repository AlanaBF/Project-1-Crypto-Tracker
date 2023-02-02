var apiKey = '5d76a51b804b424e98954f30cbd5e472';

function callNewsAPI(query) {
    var urlCD = `https://newsapi.org/v2/everything?q=${query}&from=2023-01-02&sortBy=publishedAt&apiKey=${apiKey}`;
    $.ajax({
      url: urlCD,
      method: "GET",
      error: function (xhr) {
        if (xhr.status == 404) {
          console.log('Error here')
        } else if (xhr.status == 401) {
            console.log('unauthorized')
        }
      },
    }).then((res) => {
      console.log('news:');
      console.log(res);
    });
  }
callNewsAPI('bitcoin');