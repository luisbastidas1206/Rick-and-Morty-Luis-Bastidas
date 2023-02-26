import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar'
import characters, { Rick } from './data.js'

function App () {

  function onSearch(id){
    window.alert(id)
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar
          onSearch={onSearch}
        />
        <div>
        -
        </div>
        <div>
        -
        </div>
        
      <div>
        {/*<Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />*/}
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <div> 
      </div>
    </div>
  )
}

export default App
