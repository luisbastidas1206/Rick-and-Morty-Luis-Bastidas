import "./App.css";
import React from "react";
import styles from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Form from "./components/Form";
import Detail from "./components/Detail.jsx";
import characters from "./data.js";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);

  const username = "Patricio@gmail.com";
  const password = "luis01ñ";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  React.useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let existe = characters.find((e) => e.id === data.id);
          if (existe) {
            alert(
              "No repitas personajes que me da anciedad, has lo que te digo, recuerda que te estoy vigilando."
            );
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id);
    });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <div>
          {location.pathname === "/" ? null : <NavBar onSearch={onSearch} />}
        </div>

        <Routes>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          <Route path="/" element={<Form login={login} />}></Route>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />}></Route>
          <Route path="/detail/:detailId" element={<Detail />}></Route>
        </Routes>
        <div></div>
      </div>
    </div>
  );
}

export default App;

/*

"/home": esta será la ruta del Home (vista principal/general).
"/detail/:detailId": en esta ruta encontraremos información más detallada sobre el personaje en particular.
"/about": en esta ruta colocarás tu nombre y describirás de qué trata la aplicación Rick & Morty.

*/
