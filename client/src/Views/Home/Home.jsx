import Cards from "./../../Components/Cards/Cards";
import Paginado from "./../../Components/Paginado/Paginado";
import { useDispatch } from "react-redux";
import { useEffect } from "react"; // Agrega "useState"
import { getPokemons, reset_search, pokeRender } from "../../redux/actions";
import style from "./Home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  let currentPokemons = useSelector((state) => state.currentPokemons);

  //const pokeName = useSelector((state) => state.pokeName);
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleMostrar = () => {
    dispatch(reset_search(allPokemons));
  };
  useEffect(() => {
    dispatch(pokeRender(allPokemons));
  }, [dispatch, allPokemons]);
  return (
    <div className={style.Home}>
      <div>
        <Cards pokemons={currentPokemons} />
        {currentPokemons.length === 1 ? (
          <button onClick={handleMostrar}>Mostrar todos</button>
        ) : (
          <div></div>
        )}
        {currentPokemons.length !== 1 && <Paginado />}
      </div>
    </div>
  );
};

export default Home;
