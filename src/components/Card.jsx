import './Card.css'


export default function Card(props) {
console.log(props)


   return (
      <div className="card">
         <div className='buttonContainer'>
            <button onClick={() => props.onClose ()}>X</button>
         </div>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.image} /> 
         
         
      </div>
   );
}
