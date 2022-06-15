module.exports = {
    getNews
}


async function getNews(req, res) {
    console.log(req.params.tickers)
    const response = await fetch (
        'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology,blockchain&apikey=WR5E6F1M35Y55WNY'
    ) 
    const result = await response.json()
    res.json(result)
    return result
}