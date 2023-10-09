const dotenv = require("dotenv");
const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const c_getPokemonById = async (id) => {
  if (isNaN(id)) {
    console.log("Se hace una busqueda en la DB");
    const dataDB = await Pokemon.findAll({
      where: { id: id },
      include: [Type],
    });
    if (dataDB.length == 0) throw Error("No existe ese ID en la base de datos");
    return dataDB;
  } else {
    console.log("Se hace una busqueda por API");
    const { data } = await axios(`${URL}/${id}`);
    return data;
  }
};
module.exports = c_getPokemonById;
