// const http = require("http");
// const PORT = 3001;
// const getCharById = require("./controllers/getCharById")
// const getCharDetail = require("./controllers/getCharDetail")

// http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   if(req.url.includes("onsearch")){
//     //console.log(req.url.split("/"))
//     const myID = req.url.split("/").pop()
//     getCharById(res, myID)
//   }
//   if(req.url.includes("detail")){
//     //console.log(req.url.split("/"))
//     const myID = req.url.split("/").pop()
//     getCharDetail(res, myID)
//   }

// }).listen(PORT,"localhost");

const express = require("express");
const server = express();
const PORT = 3001;
const morgan = require("morgan");
const router = require("./routes/index");
const cors = require ("cors")

server.use(express.json());
server.use(morgan("dev"));
server.use(cors())

server.use("/rickandmorty", router)

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});
