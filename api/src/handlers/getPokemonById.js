const c_getPokemonById = require("../controlers/c_getPokemonById");

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await c_getPokemonById(id);
    return res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = getPokemonById;
