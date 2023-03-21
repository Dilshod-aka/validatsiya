const {Router} = require("express");
const { getUser } = require("../controllers/user.controller");
const isAuth  = require("../middlewares/isAuth.middleware");

const router = Router();

router.get("/user", isAuth, getUser )

module.exports  = router;