import {
  GET_POKEMONS,
  SEARCH_POKEMON,
  FILTER_TYPE,
  RESET_SEARCH,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  CURRENT_POKEMONS,
  SORT,
} from "./action-types";

const initialState = {
  allPokemons: [],
  pokeName: [],
  filtered: [],
  currentPage: 1,
  pokeRender: [],
  currentPokemons: [],
  sorted: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokeName: payload,
      };
    case RESET_SEARCH:
      return {
        ...state,
        currentPokemons: payload,
        pokeName: [],
      };

    case FILTER_TYPE:
      return {
        ...state,
        filtered: payload,
        currentPokemons: payload,
      };

    case SORT:
      return {
        ...state,
        currentPokemons: payload,
        sorted: payload,
      };

    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case CURRENT_POKEMONS:
      return {
        ...state,
        currentPokemons: payload,
      };
    default:
      return state;
  }
};

export default reducer;
