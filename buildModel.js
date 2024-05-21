// buildModel.js
const tf = require('@tensorflow/tfjs');

function buildLSTMModel() {
    const model = tf.sequential();
    model.add(tf.layers.lstm({
        units: 50,
        returnSequences: true,
        inputShape: [30, 1] // 30 days of data
    }));
    model.add(tf.layers.dropout(0.2));
    model.add(tf.layers.lstm({
        units: 50,
        returnSequences: true
    }));
    model.add(tf.layers.dropout(0.2));
    model.add(tf.layers.lstm({
        units: 50,
        returnSequences: false
    }));
    model.add(tf.layers.dropout(0.2));
    model.add(tf.layers.dense({ units: 1 }));

    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'adam'
    });

    return model;
}

async function trainModel(model, X_train, y_train, epochs) {
    const X = tf.tensor3d(X_train, [X_train.length, 30, 1]);
    const y = tf.tensor2d(y_train, [y_train.length, 1]);
    await model.fit(X, y, { epochs });
}

function predictNextPrice(model, last30DaysData) {
    const nextDayData = last30DaysData.slice(-30); // Take the last 30 days
    const nextDayDataTensor = tf.tensor3d([nextDayData], [1, 30, 1]);
    const predictedPrice = model.predict(nextDayDataTensor).dataSync()[0];
    return predictedPrice;
}

module.exports = { buildLSTMModel, trainModel, predictNextPrice };
