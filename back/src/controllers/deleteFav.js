var { favoritos } = require("../utils/favs");

let deleteFav = (id) => {
  favoritos.filter((frank) => {
    return frank.id !== id;
  });
};

module.exports = { deleteFav };
