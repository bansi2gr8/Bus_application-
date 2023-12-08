const  healthModel = require('../Models/health.model')

const get = function (){
    return healthModel.output()
}

module.exports = {get}