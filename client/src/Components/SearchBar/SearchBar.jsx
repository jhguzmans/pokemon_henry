import { search_pokemon } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  console.log(state);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(search_pokemon(state.toLowerCase()));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
