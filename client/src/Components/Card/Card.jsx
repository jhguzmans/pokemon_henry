import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ pokemon }) => {
  return (
    <div className={style.contenedor}>
      <Link to={`/detail/${pokemon.name}`}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Nombre: {pokemon.name}</p>
        <p>Tipos:</p>
        {pokemon.type.map((type, i) => (
          <p key={i}>{type}</p>
        ))}
      </Link>
    </div>
  );
};

export default Card;
