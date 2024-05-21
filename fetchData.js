// fetchData.js
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://rest.coinapi.io/v1/ohlcv';
const SYMBOL_ID = 'BITSTAMP_SPOT_BTC_USD'; // Replace with the correct symbol for Bitcoin in USD

async function fetchCryptoData() {
    try {
        const response = await axios.get(`${BASE_URL}/${SYMBOL_ID}/history`, {
            params: {
                period_id: '1DAY',
                time_start: '2023-01-01T00:00:00', // Adjust this start time as needed
                apikey: API_KEY
            }
        });

        const data = response.data;
        const prices = data.map(entry => parseFloat(entry.price_close)); // Use the 'price_close' field
        return prices.reverse(); // Latest data last
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

module.exports = fetchCryptoData;
