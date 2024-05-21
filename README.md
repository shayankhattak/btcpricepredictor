# Crypto Price Predictor

Crypto Price Predictor is a Node.js application that uses a Long Short-Term Memory (LSTM) model to predict the next day's price of Bitcoin. It fetches historical market data from CoinAPI and leverages TensorFlow.js for building and training the predictive model.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Example Output](#example-output)
- [File Overview](#file-overview)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project aims to predict the next day's Bitcoin price using historical data. By leveraging LSTM neural networks, the model can capture and learn from the temporal dependencies in the data.

## Features

- Fetches historical OHLCV (Open, High, Low, Close, Volume) data from CoinAPI.
- Utilizes LSTM neural networks for time series prediction.
- Configurable with easy setup using environment variables.
- Outputs the predicted price for the next day directly in the terminal.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/shayankhattak/btcpricepredictor.git
    cd btcpricepredictor
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **Set up CoinAPI:**

    - Sign up at [CoinAPI](https://www.coinapi.io/) and get your API key.
    - Create a `.env` file in the root directory of the project and add your API key:

        ```plaintext
        API_KEY=your_coinapi_key_here
        ```

2. **Ensure your `.env` file is included in `.gitignore` to keep it secure:**

    ```plaintext
    .env
    ```

## Usage

1. **Run the prediction script:**

    ```bash
    node predictionBot.js
    ```

2. **View the output:**

    - The predicted price for the next day will be displayed in the terminal.

## Example Output

When you run `node predictionBot.js`, you should see output similar to:

```plaintext
Predicted price for the next day: 45000.50
