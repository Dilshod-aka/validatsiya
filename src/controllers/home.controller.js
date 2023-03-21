const homeGet = (req, res) =>{
    try{
        res.render("index", {
            id: req.user.id
        })
    } catch (error) {}
}

module.exports = {
    homeGet
}