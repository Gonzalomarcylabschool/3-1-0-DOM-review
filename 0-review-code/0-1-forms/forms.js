const handleFormSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission
  const form = e.currentTarget;
  const formData = new FormData(form);
  const pokemonName = Object.fromEntries(formData.entries());
  console.log('pokemonName:', pokemonName);
  const resultsDiv = document.querySelector('#search-results');
  resultsDiv.innerHTML = ''; // Clear previous results

  if (pokemonName) {
    const resultItem = document.createElement('div');
    resultItem.innerText = `Searching for Pokémon: ${pokemonName.pokemon}`;
    resultsDiv.appendChild(resultItem);
    // Clear the input after submission
    form.reset();
  } else {
    const errorItem = document.createElement('div');
    errorItem.innerText = 'Please enter a Pokémon name.';
    resultsDiv.appendChild(errorItem);
  }
};

const main = () => {
  // Event handling for form submission
  //document.querySelector('#pokemon-search-form').addEventListener('submit', handleFormSubmit)
  const form = document.querySelector('#pokemon-search-form');
  form.addEventListener('submit', handleFormSubmit);
};

main();
