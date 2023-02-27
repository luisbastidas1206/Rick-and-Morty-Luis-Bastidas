import { useState } from "react";

export default function SearchBar(props) {
   const [character,setCharacter]=useState("")
   function handleInput (evento){
      setCharacter(evento.target.value)
   }
   return (
      <div>
         <input type='text' name='search' placeholder="Character Search ID"
         onChange={(e)=> handleInput(e)} value={character}/>
      <button onClick={()=>props.onSearch (character)}>Agregar</button> 
      </div>
   );
}
