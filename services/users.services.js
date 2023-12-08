const requserMod = require('../Models/users.model') 

const post = async function (Info) {
    return await requserMod.userRegistration(Info);
}

module.exports = {post}
