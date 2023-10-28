import {
  GET_POKEMONS,
  SEARCH_POKEMON,
  FILTER_TYPE,
  RESET_SEARCH,
  POKE_RENDER,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  CURRENT_POKEMONS,
  SORT,
} from "./action-types";
import axios from "axios";

export const getPokemons = () => {
  const URL = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      if (!data.length) throw Error("No hay pokemones");
      else {
        return dispatch({
          type: GET_POKEMONS,
          payload: data,
        });
      }
    } catch (error) {
      return error.message;
    }
  };
};
export const search_pokemon = (name) => {
  return async (dispatch) => {
    const URL = "http://localhost:3001/pokemons";
    try {
      const { data } = await axios.get(`${URL}?name=${name}`);
      if (data.name) {
        console.log("Pokename es:");
        console.log(data);
        return dispatch({
          type: SEARCH_POKEMON,
          payload: [data],
        });
      } else {
        throw Error("No hay pokemones con ese nombre");
      }
    } catch (error) {
      return error.message;
    }
  };
};

export const reset_search = (pokemons) => {
  return (dispatch) => {
    console.log("los pokemons en el reset search son:");
    console.log(pokemons);
    dispatch({
      type: RESET_SEARCH,
      payload: pokemons,
    });
  };
};

export const filter_type = (type, state) => {
  return (dispatch) => {
    try {
      if (state && state.length) {
        const pokemonsFiltrados = state.filter((pokemon) => {
          return pokemon.type.includes(type);
        });
        if (pokemonsFiltrados.length > 0) {
          dispatch({
            type: FILTER_TYPE,
            payload: pokemonsFiltrados,
          });
        } else {
          dispatch({
            type: FILTER_TYPE,
            payload: state,
          });
          throw new Error("No hay pokemones para filtrar");
        }
      } else {
        throw new Error("No hay pokemones para filtrar");
      }
    } catch (error) {
      console.error("Error en la acción filter_type:", error.message);
    }
  };
};

export const pokeRender = (data) => {
  return (dispatch) => {
    dispatch({
      type: POKE_RENDER,
      payload: data,
    });
  };
};

export const sort = (orden, tipo, currentPokemons, allPokemons, filtered) => {
  return (dispatch) => {
    let sortedPokemons = [];
    if (filtered.length > 0) {
      sortedPokemons = [...filtered];
    } else {
      sortedPokemons = [...currentPokemons];
    }

    if (tipo === "abc") {
      if (orden === "None")
        return (dispatch) => {
          dispatch({
            type: SORT,
            payload: sortedPokemons,
          });
        };
      if (orden === "A-Z") {
        sortedPokemons.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        sortedPokemons.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
      }
    } else {
      if (orden === "None")
        return (dispatch) => {
          dispatch({
            type: SORT,
            payload: sortedPokemons,
          });
        };
      if (orden === "Mayor a menor") {
        sortedPokemons.sort((a, b) => b.attack - a.attack);
      } else {
        sortedPokemons.sort((a, b) => a.attack - b.attack);
      }
    }

    dispatch({
      type: SORT,
      payload: sortedPokemons,
    });
  };
};

export const nextPage = (dispatch) => {
  return dispatch({
    type: NEXT_PAGE,
  });
};
export const prevPage = (dispatch) => {
  return dispatch({
    type: PREV_PAGE,
  });
};
export const setPage = (numberPage) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE,
      payload: numberPage,
    });
  };
};

export const currentPokemons = (
  pokeRender,
  indexOfFirstPokemon,
  indexOfLastPokemon
) => {
  const currentPokemon = pokeRender.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  return (dispatch) => {
    dispatch({
      type: CURRENT_POKEMONS,
      payload: currentPokemon,
    });
  };
};
