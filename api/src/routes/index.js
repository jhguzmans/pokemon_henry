const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require("../handlers/getPokemons.js");
const getPokemonById = require("../handlers/getPokemonById.js");
const postNewPokemon = require("../handlers/postNewPokemon.js");
const getTypes = require("../handlers/getTypes.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemons);
router.get("/pokemons/:id", getPokemonById);
router.post("/pokemon", postNewPokemon);
router.get("/gettypes", getTypes);
module.exports = router;
