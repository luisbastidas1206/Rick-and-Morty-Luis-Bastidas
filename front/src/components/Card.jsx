import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavotires } from "../Redux/action";

export default function Card(props) {
  console.log(props);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {});

  const sexo=()=>{
    if(props.gender==="Male"){
       return "♂";
    }
    else if(props.gender==="Female"){
       return "♀";
    }
    else{
       return "⚧️";
    }
 }
 const raza=()=>{
    if(props.species==='Human'){
       return '웃';
    }
    else if(props.species==='Alien'){
       return '👽';
    }
    else if(props.species==='Robot'){
       return '🤖';

    }else if(props.species==='Animal'){
      return '🐶';

    }
    else if(props.species==='Mythological Creature'){
      return '🐉';

    }
    else if(props.species==='Disease'){
      return '🦠';

    }else{
      return props.species
   }
 }
 
  function handleFavorites() {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavotires(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(props));
    }
  }

  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorites}>💜</button>
      ) : (
        <button onClick={handleFavorites}>🤍</button>
      )}

      <div className={styles.buttonContainer}>
        <button onClick={() => props.onClose()}>X</button>
      </div>

      <Link to={`/detail/${props.id}`}>
        <div>
          <h2>{props.name}</h2>
          <h2 className={styles.linck}>{sexo()}</h2>
          <h2>{raza()}</h2>
        </div>

        <div>
          <img src={props.image} alt={props.image} />
        </div>
      </Link>
    </div>
  );
}
