const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");

const c_getPokemons = async () => {
  let pokemons = [];
  let { data } = await axios(URL);
  pokemons = [...pokemons, ...data.results];
  for (let i = 20; i <= 100; i = i + 20) {
    let { data } = await axios(
      `https://pokeapi.co/api/v2/pokemon/?offset=${i}&limit=20`
    );
    pokemons = [...pokemons, ...data.results];
  }
  const pokemonsData = [];
  for (let j = 0; j < 25; j++) {
    let name = pokemons[j].name;
    let { data } = await axios(`http://localhost:3001/pokemons/?name=${name}`);
    pokemonsData.push(data);
  }
  return pokemonsData;
};
module.exports = c_getPokemons;
