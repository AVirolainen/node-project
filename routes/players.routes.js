const {Router} = require('express')
const router = Router()
let teamsInfo = require("../scripts/teamsInfo")

console.log(teamsInfo)

router.get("/", 
    async(req, res)=>{
        try{
            
            res.status(201).json({message: "User has been created"})
            
        }

    catch (e) {
        res.status(500).json({message : e})
    }
})

module.exports = router;