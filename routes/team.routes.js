const {Router} = require('express')
const User = require('../models/User')
const Squad = require('../models/Squad')
const router = Router()

// /api/auth/login
router.post(
    '/saveTeam',
    async (req, res)=>{
    try{
        const {id, playersList} = req.body

        console.log(JSON.parse(id).userId, playersList)

        const squad = await Squad.findOne({ owner: JSON.parse(id).userId })
        if(squad){
            console.log(squad)
        }
        squad.team = [1, 1, 1, 1]

        await squad.save()

        res.status(201).json({message: "User has been created"})
        


    } catch(e){
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router