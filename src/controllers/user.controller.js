const Io  = require("../utils/Io");
const Users = new Io("./db/users.json");

const getUser = async(req, res) => {
    try{
        const user = (await Users.read())[req.user.id - 1];
        delete user.password
        
        res.render("user", {
            user
        })
    } catch (error) {}
};

module.exports = {
    getUser
}