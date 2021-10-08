const {Schema, model} = require('mongoose')

const schema = newSchema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})  

module.exports = module('User', schema)