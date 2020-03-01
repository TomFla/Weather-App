const cityForm = document.querySelector("form");

const updateCity = async city => {
  console.log(city);
};

// prevent default action
cityForm.addEventListener("submit", e => {
  e.preventDefault();

  // get citi value
  const city = cityForm.city.value;
  cityForm.reset();

  //   update the UI with the city
  updateCity(city);
});
