const { Pokemon, Type } = require("../db.js");

const c_postNewPokemon = async (
  name,
  image,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
  typeNames // Un arreglo de nombres de tipos que deseas asignar al Pokémon
) => {
  try {
    const newPokemon = {
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
    };

    const createdPokemon = await Pokemon.create(newPokemon);

    if (typeNames && typeNames.length > 0) {
      const createdTypes = [];

      for (const typeName of typeNames) {
        // Busca el tipo por nombre en la tabla Type
        let type = await Type.findOne({
          where: {
            name: typeName,
          },
        });

        // Si no se encuentra el tipo, créalo y luego asígnalo
        if (!type) {
          type = await Type.create({
            name: typeName,
          });
        }

        // Verifica si el tipo ya está asignado al Pokémon
        const hasType = await createdPokemon.hasType(type);

        if (!hasType) {
          createdTypes.push(type);
        }
      }

      // Asigna los tipos al Pokémon a través de la relación many-to-many
      await createdPokemon.addTypes(createdTypes);
    }

    // Obtén los tipos asociados al Pokémon antes de devolverlo
    const types = await createdPokemon.getTypes();

    // Agrega los tipos al objeto de retorno
    createdPokemon.dataValues.types = types;

    console.log(createdPokemon);
    return createdPokemon;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = c_postNewPokemon;
