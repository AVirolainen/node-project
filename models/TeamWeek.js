const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    teamId: {type: String, required: true, unique: true},
    squad: []
})  

module.exports = model('TeamWeek', schema)