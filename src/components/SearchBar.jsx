export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={()=>props.onSearch ("not fount id")}>Agregar</button> 
      </div>
   );
}
