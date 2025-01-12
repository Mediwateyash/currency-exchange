# Easy Money Currency Converter

A simple and user-friendly currency converter web application that allows users to convert currencies in real-time. It supports currency conversion between various currencies using the live exchange rates.

## Features

- Convert currencies from one to another.
- Displays real-time exchange rates.
- A clean and intuitive user interface.
- Supports multiple currencies (USD, INR, etc.) with flags for better understanding.
- Simple design that allows users to quickly check exchange rates.

## Technologies Used

- **HTML**: For creating the structure of the web page.
- **CSS**: For styling and layout.
- **JavaScript**: For handling the logic behind currency conversion and interacting with the API.
- **Font Awesome**: For adding icons (e.g., arrows for direction).
- **API**: Exchange rate API for real-time currency data.

## API Used

- **ExchangeRate-API**: The application fetches the current exchange rates using the [ExchangeRate-API](https://www.exchangerate-api.com/). It provides real-time data for currency conversion.

## Project Setup

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/mediwateyash/easy-money-currency-converter.git
    ```

2. Navigate to the project directory:

    ```bash
    cd easy-money-currency-converter
    ```

3. Open the `index.html` file in your browser.

4. If you'd like to use a local development server for testing, you can use any server of your choice (e.g., Live Server in VS Code).

## Usage

1. Enter the amount you'd like to convert in the input field.
2. Select the currency you want to convert from and to (default currencies are USD and INR).
3. Click the "Get Exchange Rate" button to see the converted amount.
4. The exchange rate will be displayed below the input fields.

## How It Works

- The app fetches live exchange rates using the ExchangeRate-API.
- It retrieves the rate for the selected currencies and calculates the converted amount based on the entered value.
- The result is displayed dynamically on the page.

## Example

If you enter `100` in the "Enter amount" field and choose USD to INR, the application will fetch the real-time exchange rate and display the converted value, like:

## Author

[Diwate Yash](https://github.com/mediwateyash)
Feel free to connect me on social media if any help needed
[LinkedIn](https://www.linkedin.com/in/diwateyash2004)
