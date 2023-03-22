import React from "react";
import style from "./About.module.css";
// import foto from "../imagen"

export default function About(props) {
  return (
    <div className={style.abt}>
      <h2> ¡Me he convertido en un pepinillo, Morty! ¡Soy Pickle Riiiick!.</h2>
      <img
        src="https://images-ext-1.discordapp.net/external/5yUAn2Nj_Fr4blQKHoEuXdn9SrlmnKJSW1mlB1nQV4k/%3Fcb%3D20220105043415/https/static.wikia.nocookie.net/rickandmorty/images/4/41/Pickle_rick_transparent_edgetrimmed.png/revision/latest?width=509&height=675"
        alt=""
        className={style.pepinillo}
      />
    </div>
  );
}
