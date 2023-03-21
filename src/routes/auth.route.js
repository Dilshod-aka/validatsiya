const {Router} = require("express");
const { login, loginGet, registerGet, register, logOut } = require("../controllers/auth.controller");

const router = Router();

router.get("/login", loginGet);
router.get("/register", registerGet);
router.get("/logout", logOut)
router.post("/api/login", login);
router.post("/api/register", register);

module.exports = router;