const URL = "https://pokeapi.co/api/v2/type";
const axios = require("axios");
const { Type } = require("../db");

const c_getTypes = async (req, res) => {
  let types = [];
  types = await Type.findAll();
  if (types.length !== 0) return types;
  const { data } = await axios(URL);
  data.results.forEach((element) => {
    if (element.name) {
      types.push({ name: element.name });
    }
  });
  await Type.bulkCreate(types);
  return types;
};
module.exports = c_getTypes;
