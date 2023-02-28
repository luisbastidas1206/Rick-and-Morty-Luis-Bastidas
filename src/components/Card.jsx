import styles from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card(props) {
console.log(props)


   return (
      <div className={styles.card}>

         
         <div className={styles.buttonContainer}>
            <button onClick={() => props.onClose ()}>X</button>
         </div>

         <Link to={`/detail/${props.id}`} >
            <div>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            </div>

            <div>
         <img  src={props.image} alt={props.image} /> 
            </div>
         </Link>
      </div>

   );
}
