const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const c_getPokemonByName = require("../controlers/c_getPokemonByName.js");
const getPokemons = async (req, res) => {
  try {
    if (req.query.name) {
      const { name } = req.query;
      const data = await c_getPokemonByName(name);
      return res.status(200).json(data);
    }
    const { data } = await axios(`${URL}`);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = getPokemons;
