const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  let data = JSON.parse(xhr.responseText);

  data.forEach((country) => {
    const name = country.name.common;
    const capital = country.capital;
    const flag = country.flags.png;

    console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
  });
};

xhr.open("GET", URL);
xhr.send();
