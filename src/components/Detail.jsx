import React from 'react'
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom'



export default function Detail() {

  const [character, setCharacter] = React.useState({})

  const {detailId}= useParams()

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (

    <div className={styles.detail}>
      <div className={styles.txt}>
        <h1>DETALLES:</h1>
            <h1>NOMBRE: {character.name}</h1>
            <h2>ESPECIE: {character.species}</h2>
            <h2>GÉNERO: {character.gender}</h2>
            <h2>STATUS: {character.status}</h2>
            
            <h2>ORIGEN: {character.origin?.name}</h2>
            <br/>
        </div>

        <div className={styles.img}>

        <img src={character.image} alt={character.name} />

        </div>



      </div>
  )
}

/*Name
Status
Specie
Gender
Origin
Image */