import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.Landing}>
      <img
        src="https://p4.wallpaperbetter.com/wallpaper/699/640/867/red-pikachu-pokeballs-minimalism-wallpaper-preview.jpg"
        alt="background"
      />
      <button>
        <Link to="/home">Ingresar</Link>
      </button>
    </div>
  );
};

export default Landing;
