const {Router} = require("express");
const { homeGet } = require("../controllers/home.controller");
const isAuth = require("../middlewares/isAuth.middleware");

const router =  Router();

router.get("/", isAuth, homeGet)

module.exports = router;