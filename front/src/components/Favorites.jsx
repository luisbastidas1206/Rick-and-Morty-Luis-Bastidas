import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Card.module.css";
const favorites = (props) => {
  return (
    <div>
      <h1>Tus gustos, no te juzgo</h1>
      {props.myFavorites.map((favorito) => {
        return (
          <div className={styles.favoritos}>
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
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(favorites);
