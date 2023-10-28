import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = ({ pokemons }) => {
  return (
    <div className={style.Cards}>
      {console.log("Los pokemones que llegan a Cards son:")}
      {console.log(pokemons)}
      {pokemons?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Cards;
