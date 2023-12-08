const userReq = require('../controllers/users.controller')

const express = require('express');
const route = express.Router();

route.post('/create-user',userReq.userRegistration)

module.exports = route
