const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);

    // Use the find function to get the country that uses US dollars as currency
    const countryWithUSD = data.find((country) => {
      return country.currencies && country.currencies.USD;
    });

    // Log the name of the country with USD as currency
    if (countryWithUSD) {
      console.log(
        "Country that uses US dollars as currency:",
        countryWithUSD.name.common
      );
    } else {
      console.log("No country found that uses US dollars as currency.");
    }
  } else {
    console.log("Error fetching data. Status:", xhr.status);
  }
};

xhr.open("GET", URL);
xhr.send();
