import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
const URL = `http://localhost:3001/pokemons?name=`;

const Detail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get(`${URL}${name}`);
        setPokemon(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPokemon();
  }, [name]);

  return (
    <div className={style.container}>
      {pokemon ? (
        <>
          <div className="imagen">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className="datos">
            <h1>Nombre: {pokemon.name}</h1>
            <p>Vida: {pokemon.life}</p>
            <p>Ataque: {pokemon.attack}</p>
            <p>Defensa: {pokemon.defense}</p>
            <p>Velocidad: {pokemon.speed}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Tipo</p>
            {pokemon.type.map((type, i) => (
              <p key={i}>{type}</p>
            ))}
          </div>
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
      <button className={style.button}>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};

export default Detail;
