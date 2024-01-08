// const URL = "https://restcountries.com/v3.1/all";

// const xhr = new XMLHttpRequest();

// xhr.onload = () => {
//   let data = JSON.parse(xhr.response);
//   console.log(JSON.parse(xhr.response));
//   for (const iterator of data) {
//     console.log(iterator.flags.png);
//   }
// };

// xhr.open("GET", URL);
// xhr.send();

// //

const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.onload = () => {
  let data = JSON.parse(xhr.response);

  // Use the filter function to get countries from Asia
  const asiaCountries = data.filter((country) => {
    return country.region === "Asia";
  });

  // Log the countries from Asia
  console.log("Countries in Asia:", asiaCountries);

  // for (const country of asiaCountries) {
  //console.log(iterator.continents);
  //   console.log(asiaCountries.region);
  // }
};

xhr.open("GET", URL);
xhr.send();
