const axios = require("axios")

const getCharById = (res, id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result=>result.data)
    .then(data =>{
        let char ={
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res
            .writeHead(200, { "Content-Type": "application/json"})
            .end(JSON.stringify(char))
    })

    .catch(err =>
        res
            .writeHead(500, { "Content-Type": "text/plain"})
            .end("He buscado hasta debajo de tu mesa, y no encontre esa ID")
        )
    

}


module.exports = getCharById