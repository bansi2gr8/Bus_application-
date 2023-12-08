const userService = require('../services/users.services')
const userRegistration = async (req,res) => {
    const data = req.body
    res.send ( await userService.post(data))
}

module.exports = {
    userRegistration
}