const {Router} = require('express')
const User = require('../models/User')
const Squad = require('../models/Squad')
const router = Router()

router.post(
    '/saveTeam',
    async (req, res)=>{
    try{
        const {id, playersList} = req.body
        const squad = await Squad.findOne({ owner: JSON.parse(id).userId })
        if(squad){
            await Squad.updateOne({ owner: JSON.parse(id).userId }, {$set: {team: Object.values(playersList)}})
            res.status(201).json({message: "was found"})
        }
        else{
            const newSquad = new Squad({owner: JSON.parse(id).userId, team: Object.values(playersList)})
            await newSquad.save()
    
            res.status(201).json({message: "squad has been created"})
        }
        
    } catch(e){
        res.status(500).json({message: "Something is wrong"})
    }
})

router.post(
    '/getTeam',
    async (req, res)=>{
    try{
        const {id} = req.body
        const squad = await Squad.findOne({ owner: id })
        res.json(squad.team)
        
    } catch(e){
        res.status(500).json({message: "Something is wrong"})
    }
})

router.get(
    '/getTeams',
    async (req, res)=>{
    try{
        const squads = await Squad.find()
        res.json(squads)
        
    } catch(e){
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router