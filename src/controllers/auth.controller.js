const bcrypt = require("bcrypt")
const Io = require("../utils/Io");
const Users = new Io("./db/users.json");
const User = require("../models/users");
const jwt = require("../utils/jwt");
const authDTO = require("../validation/auth.validation");


const login = async(req, res) =>{
    try {
      const {username, password} = req.body;
      
      const users = await Users.read()

      const user = users.find((user) => user.username === username.toLowerCase());

      if(!user) return res.redirect("/register");

      const verified = await bcrypt.compare(password, user.password);
       
      if(!verified) return res.redirect("/login");

      const token  = jwt.sign({id: user.id});

      res.cookie("token", token);

      res.redirect("/")
    } catch (error) {
      res.redirect("/login")
    }
};

const register = async(req, res) =>{
  try {
    const {username, password} = req.body;

    const {error} = authDTO({username, password});
    if (error) return res.redirect("/register");

    const users = await Users.read();

    const user = users.find((user) => {
      return user.username === username.toLowerCase();
    })

    if(user) return res.redirect("/login");

    const id = (users[users.length - 1]?.id || 0) + 1;
    const hashedPass = await bcrypt.hash(password, 12);
    const newUser = new User(id, username.toLowerCase(),  hashedPass);

    const allUsers = users.length ? [...users, newUser] : [newUser];

    Users.write(allUsers);

    const token = jwt.sign({id: newUser.id});

    res.cookie("token", token);
    
    res.redirect("/");
  } catch (error) {
    res.status(500).end()
  }
};


const loginGet = (req, res) =>{
  try{
    res.render("login");
  } catch(error){}
}

const registerGet = (req, res) =>{
  try{
    res.render("register");
  } catch(error){}
}

const logOut = (req, res) => {
  try{
    res.clearCookie("token");
    res.redirect("/login")
  } catch (error) {
    res.redirect("/login")
  }
}

module.exports = {
    login,
    loginGet,
    registerGet,
    register,
    logOut
}