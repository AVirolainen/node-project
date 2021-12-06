const {Router} = require('express')
const router = Router()
const TeamWeek = require("../models/TeamWeek")

router.get(
    '/',
    async (req, res)=>{
    try{
        console.log(222)
        const squad = await TeamWeek.findOne({ teamId: "1" })
        console.log(squad)
        res.json(squad.squad)
        
    } catch(e){
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router