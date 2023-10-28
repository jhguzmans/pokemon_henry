import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { filter_type } from "../../redux/actions";
const URL = `http://localhost:3001/gettypes`;

const Filter = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const sorted = useSelector((state) => state.sorted);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const getTypes = async () => {
      try {
        const { data } = await axios.get(URL);
        setTypes(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTypes();
  }, []);

  let typesArr = [];
  for (let i = 0; i < types.length; i++) {
    typesArr.push(types[i].name);
  }

  const handleSelect = (event) => {
    const selectedType = event.target.value;
    if (!sorted[0]) {
      dispatch(filter_type(selectedType, allPokemons));
    } else {
      dispatch(filter_type(selectedType, sorted));
    }
  };

  return (
    <div>
      <label htmlFor="">Filtro por tipo: </label>
      <select id="types" onChange={handleSelect}>
        {typesArr.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
