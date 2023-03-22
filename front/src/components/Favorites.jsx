import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Card.module.css";

const favorites = (props) => {
  /*  useEffect(()=>{
    return (
      dispatch(orderCards('Ascendente')),
      ()=>{ dispatch(filterCards('none'))
    dispatch(orderCards('Ascendente'))
})})*/

  return (
    <div>
      <h1>Tus gustos, no te juzgo</h1>
      <div className={styles.flex}>
        {props.myFavorites.map((favorito) => {
          return (
            <div className={styles.favoritos} key={props.id}>
              <Link to={`/detail/${favorito.id}`}>
                <h2>{favorito.name}</h2>
                <h2>{favorito.species}</h2>
                <h2>{favorito.gender}</h2>
                <img src={favorito.image} alt={favorito.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(favorites);
