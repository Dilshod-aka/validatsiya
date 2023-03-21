class User {
    constructor(id, username, password, image = null, isDeleted = false){
        this.id = id;
        this.username = username;
        this.password = password;
        this.image = image;
        this.isDeleted = isDeleted;
    }
}
module.exports = User;