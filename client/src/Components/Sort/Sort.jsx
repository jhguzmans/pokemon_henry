import { useSelector, useDispatch } from "react-redux";
import { sort } from "../../redux/actions";
import React from "react";
const Sort = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const filtered = useSelector((state) => state.filtered);

  const handleSelectAbc = (event) => {
    const selectedOrderAbc = event.target.value;
    dispatch(sort(selectedOrderAbc, "abc", allPokemons, filtered));
  };

  const handleSelectAtt = (event) => {
    const selectedOrderAtt = event.target.value;
    dispatch(sort(selectedOrderAtt, "att", allPokemons, filtered));
  };

  return (
    <div>
      <div>
        <label>Ordenar por nombre: </label>
        <select id="abc" onChange={handleSelectAbc}>
          <option value="None">Ninguno</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <label>Ordenar por ataque: </label>
        <select id="att" onChange={handleSelectAtt}>
          <option value="None">Ningnun</option>
          <option value="Mayor a menor">Mayor a menor</option>
          <option value="Menor a mayor">Menor a mayor</option>
        </select>
      </div>
    </div>
  );
};
export default Sort;
