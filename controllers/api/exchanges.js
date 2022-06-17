const axios = require("axios");

module.exports = {
  getExchanges,
};


async function getExchanges(req, res) {
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          limit: '50',
          offset: '0',
          orderBy: '24hVolume',
          orderDirection: 'desc'
        },
        headers: {
          'X-RapidAPI-Key': '2b782cf947mshb2090e54f71958dp181edajsnbe46f8fc7d5d',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data.data.exchanges);
      }).catch(function (error) {
          console.error(error);
      });
}


