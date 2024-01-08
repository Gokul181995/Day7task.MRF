const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.onload = function () {
  xhr.status;
  let data = JSON.parse(xhr.responseText);

  // Use the reduce function to calculate the total population
  const totalPopulation = data.reduce((accumulator, country) => {
    const population = country.population?.total;
    return accumulator + (population || 0);
  }, 0);

  // Log the total population
  console.log("Total population of countries:", totalPopulation);
  console.log("Total population of countries:", [totalPopulation]);
};
xhr.open("GET", URL);
xhr.send();
