const serverless = require('serverless-http');
const express = require('express');
const yahooStockPrices = require('yahoo-stock-prices');

const app = express()

app.get('/', async function (req, res) {
    price = await yahooStockPrices.getCurrentPrice('GME')
    res.send(JSON.stringify({'USD': price}))
})

module.exports.handler = serverless(app)