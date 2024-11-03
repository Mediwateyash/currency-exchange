const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");

for (let selects of dropdowns){
    for (currcode in countryList){
        let newOption = document.createElement("option");
        newOption.value = currcode;
        newOption.innerHTML = currcode;
        selects.append(newOption);
    }
}