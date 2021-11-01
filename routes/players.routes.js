const {Router} = require('express')
const axios = require('axios')  
const cheerio = require('cheerio')
const router = Router()
let teamsInfo = require("../scripts/teamsInfo")

router.get("/", 
    async(req, res)=>{
        try{
            const players = []

            
            // let url = `https://www.flashscore.com.ua/team/${item.teamName}/${item.teamId}/squad/`
        
            // axios(url)
            //     .then(responce => {
            //         const html = responce.data
            //         const $ = cheerio.load(html)
            //         const info = {}
            //         let currentPos = ""
        
            //         $("#league-tdkpynmB-table", html).children().each(function(){
            //             let position = $(".profileTable__mainInfo", this).text()
            //             const player = $(this).find('a').text()
        
            //             if(position.length>0 && !(position in info)){
            //                 switch(position){
            //                     case "Вратари":
            //                         position = "goalkeeper"
            //                         break;
            //                     case "Защитники":
            //                         position = "defender"
            //                         break;
            //                     case "Полузащитники":
            //                         position = "midfielder"
            //                         break;
            //                     case "Нападающие":
            //                         position = "forward"
            //                         break;
            //                     case "Тренер":
            //                         position = "coach"
            //                         break;
        
            //                 }
            //                 info[position] = []
            //                 currentPos = position
            //             }
        
            //             if(player.length>0){
            //                 info[currentPos].push(player)
            //             } 
        
            //         })
            //         info["logo"] = `https://s.ill.in.ua/i/football/team/logo/0x160/${item.teamLogoId}.png`
            //         return info
            //     }).catch(err => console.log(err))

                   
            
            
            res.status(201).json({message: "User has been created"})
            
        }

    catch (e) {
        res.status(500).json({message : e})
    }
})

module.exports = router;