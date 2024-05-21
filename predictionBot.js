// predictionBot.js
const { buildLSTMModel, trainModel, predictNextPrice } = require('./buildModel');
const fetchCryptoData = require('./fetchData');

async function runPrediction() {
    try {
        // Fetch cryptocurrency data
        const cryptoData = await fetchCryptoData();
        const X_train = [];
        const y_train = [];
        for (let i = 30; i < cryptoData.length; i++) {
            X_train.push(cryptoData.slice(i - 30, i).map(price => [price])); // Ensure 3D array
            y_train.push([cryptoData[i]]);
        }

        // Build and train the LSTM model
        const model = buildLSTMModel();
        await trainModel(model, X_train, y_train, 100); // Train for 100 epochs

        // Predict the next day's price
        const nextDayPrice = predictNextPrice(model, cryptoData);
        console.log('Predicted price for the next day:', nextDayPrice);
    } catch (error) {
        console.error('Error running prediction:', error);
    }
}

runPrediction();
