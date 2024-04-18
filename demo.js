const findButton = document.querySelector("#findButton");
const pokemonImage = document.querySelector("#pokemonImage");

findButton.addEventListener('click', async function() {
    const pokemonName = document.querySelector("#pokemonInput").value.toLowerCase();

    try {
        const data = await fetchData(pokemonName);
        displayPokemon(data);
    } catch (error) {
        console.log(error);
    }
});

async function fetchData(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch data!");
    }

    return response.json();
}

function displayPokemon(pokemonData) {
    const pokemonImageURL = pokemonData.sprites.front_default;
    pokemonImage.src = pokemonImageURL;
    pokemonImage.alt = pokemonData.name;
}
