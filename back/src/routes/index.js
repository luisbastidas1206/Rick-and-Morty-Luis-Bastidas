const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const { postFav } = require("../controllers/postFav");
let { favoritos } = require("../utils/favs");
const { deleteFav } = require("../controllers/deleteFav");
const cors = require("cors");

const router = Router();
router.use(cors());

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/favorites", postFav);
router.get("/favorites", () => {
  return favoritos;
});
router.delete("/favorites/:id", deleteFav);

module.exports = router;
