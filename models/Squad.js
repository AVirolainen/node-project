const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: String, required: true, unique: true},
    team: []
})  

module.exports = model('Squad', schema)