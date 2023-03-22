let { favoritos } = require("../utils/favs");

const postFav = (req, res) => {
  favoritos.push(req.body);
  return res.json(200);
};

module.exports = { postFav };
