const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: String, required: true, unique: true},
    team: [{type: Types.ObjectId, ref:"Squad"}]
})  

module.exports = model('Squad', schema)