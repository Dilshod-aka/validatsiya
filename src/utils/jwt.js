const jwt = require("jsonwebtoken");
const {env} = require("../../config")

const sign = (payload) => 
      jwt.sign(payload, env.JWT_SECRET_KEY, {expiresIn: "12h"})

const verify = (payload) => jwt.verify(payload, env.JWT_SECRET_KEY);


module.exports = {
    sign,
    verify
}