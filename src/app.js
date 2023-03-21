require("dotenv").config();
const express = require("express");
const cookie = require("cookie-parser");

const {env} = require("../config");
const routes = require("./routes")

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(cookie());

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/views");

app.use(routes)

const PORT = env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server ${PORT}`)
});           