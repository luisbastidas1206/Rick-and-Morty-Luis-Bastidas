// const axios = require("axios")

// const getCharById = async(res, id) =>{
//    await axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result=>result.data)
//     .then(data =>{
//         let char ={
//             id: data.data.id,
//             name: data.data.name,
//             image: data.data.image,
//             gender: data.data.gender,
//             species: data.data.species
//         }
//         return char
//     })

//     .catch(err =>
//         res
//             .writeHead(500, { "Content-Type": "text/plain"})
//             .end("He buscado hasta debajo de tu mesa, y no encontre esa ID")
//         )

// }

// module.exports = getCharById

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params;
  axios(URL + id).then(
    (response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.image,
        gender: response.data.gender,
        species: response.data.species,
      };
      res.status(200).json(character);
    },
    (error) => res.status(500).json(error.message)
  );
}

module.exports = { getCharById };
