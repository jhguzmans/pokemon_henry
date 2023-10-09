const axios = require("axios");
const { Pokemon, Type } = require("../db.js");
const c_postNewPokemon = require("../controlers/c_postNewPokemon");

const postNewPokemon = async (req, res) => {
  try {
    const {
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      typeNames,
    } = req.body;
    const createdPokemon = await c_postNewPokemon(
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      typeNames
    );
    return res.status(200).json(createdPokemon);
  } catch (error) {
    return res.json(error.message);
  }
};
module.exports = postNewPokemon;
