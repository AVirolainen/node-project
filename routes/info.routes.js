const {Router} = require('express')
const User = require('../models/User')
const Squad = require('../models/Squad')
const router = Router()

router.post(
    '/getInfo',
    async (req, res)=>{
    try{
        const {id} = req.body
        
        const user = await User.findOne({ _id: JSON.parse(id).userId })
        console.log(user);
        res.json(user)
        
    } catch(e){
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router
