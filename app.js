const BASE_URL_CDN = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const BASE_URL_FALLBACK = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate the dropdowns with currency options
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "TZS") { // Change this to your default target currency
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update the flag image based on selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Event listener for the convert button
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Function to update exchange rate and convert currency
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;

    // Default to 1 if the input is empty or less than 1
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }

    const fromCurrency = fromCurr.value.toLowerCase();
    const toCurrency = toCurr.value.toLowerCase();
    const URL = `${BASE_URL_CDN}/${fromCurrency}.json`; // Main API endpoint

    try {
        let response = await fetch(URL);
        if (!response.ok) {
            console.warn("Primary URL failed, attempting fallback...");
            const fallbackURL = `${BASE_URL_FALLBACK}/${fromCurrency}.json`;
            response = await fetch(fallbackURL);
            if (!response.ok) throw new Error("Both primary and fallback URLs failed.");
        }

        let data = await response.json();

        // Extracting the exchange rate
        let rate = data.rates[toCurrency];
        
        if (rate) {
            let finalAmount = amtval * rate; // Calculate final amount
            msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
        } else {
            msg.innerText = `Exchange rate for ${toCurrency} not found.`;
        }
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        msg.innerText = "Failed to fetch exchange rate.";
    }
};
 