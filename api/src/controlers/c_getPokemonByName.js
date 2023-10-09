require("dotenv").config();
const URL = `https://pokeapi.co/api/v2/pokemon/`;
const axios = require("axios");
const { Pokemon } = require("../db.js");
const { Op } = require("sequelize");
const c_getPokemonByName = async (name) => {
  //Aquí traemos los de la api
  console.log(name);
  const { data } = await axios(`${URL}${name}`);
  //Aquí traemos los de la base de datos
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
  console.log(dataDB);
  if (data.length == 0 && dataDB.length == 0)
    throw Error("No existe ningun pokemon con ese nombre.");
  return [data];
};
module.exports = c_getPokemonByName;
