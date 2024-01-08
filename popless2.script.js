// const URL = "https://restcountries.com/v3.1/all";

// const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//   if (xhr.status) {
//     let data = JSON.parse(xhr.responseText);

//     // Use the filter function to get countries with a population less than 200,000
//     const countriesWithLowPopulation = data.filter((country) => {
//       const population = country.population?.total;
//       return population !== undefined && population < 200000;
//     });

//     // Log the countries with low population
//     console.log(
//       "Countries with a population of less than 2 lakhs:",
//       countriesWithLowPopulation
//     );
//   } else {
//     console.error("Error fetching data. Status:", xhr.status);
//   }
// };

// xhr.open("GET", URL);
// xhr.send();

const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);

      // Use the filter function to get countries with a population less than 200,000
      const countriesWithLowPopulation = data.filter((country) => {
        const population = country.population?.total;
        return population !== undefined && population < 200000;
      });

      // Log the countries with low population
      console.log(
        "Countries with a population of less than 2 lakhs:",
        countriesWithLowPopulation
      );
    } else {
      console.log("Error fetching data. Status:", xhr.status);
    }
  }
};

xhr.open("GET", URL);
xhr.send();
