// const axios = require("axios")

// const getCharDetail = (res, id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result=>result.data)
//     .then(data =>{
//         let char ={
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin
//         }
//         res
//             .writeHead(200, { "Content-Type": "application/json"})
//             .end(JSON.stringify(char))
//     })

//     .catch(err =>
//         res
//             .writeHead(500, { "Content-Type": "text/plain"})
//             .end("He buscado hasta debajo de tu mesa, y no encontre esa ID")
//         )

// }

// module.exports = getCharDetail

const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;


 async function getCharDetail(req, res) {
  const { detailId } = req.params;
 const response= await axios (URL + detailId)
    
      const character = {
        id : detailId,
        name: response.data.name,
        image: response.data.image,
        gender: response.data.gender,
        species: response.data.species,
        status: response.data.status,
        origin: response.data.origin?.name,
      };
       return res.json(character);
    }
    (error) => res.status(500).json(error.message)
  ;


module.exports = { getCharDetail };
