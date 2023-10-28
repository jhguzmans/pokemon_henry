require("dotenv").config();
const URL = `https://pokeapi.co/api/v2/pokemon/`;
const axios = require("axios");
const { Pokemon } = require("../db.js");
const { Op } = require("sequelize");
const c_getPokemonByName = async (name) => {
  const { data } = await axios(`${URL}${name}`);
  const dataDB = [];
  if (!data) {
    dataDB = await Pokemon.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return dataDB;
  }
  if (data.length == 0 && dataDB.length == 0)
    throw Error("No existe ningun pokemon con ese nombre.");
  let type = [];
  for (let i = 0; i < data.types.length; i++) {
    type.push(data.types[i].type.name);
  }
  return {
    name: data.name,
    image: data.sprites.front_default,
    life: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    type,
  };
};
module.exports = c_getPokemonByName;
