const {Router} = require('express')
const axios = require('axios')  
const cheerio = require('cheerio')
const router = Router()
let teamsInfo = require("../scripts/teamsInfo")

router.post("/", 
    async(req, res)=>{
        try{
            const players = []
            const {name, id, logo} = req.body
            
            let url = `https://www.flashscore.com.ua/team/${name}/${id}/squad/`
        
            const data = axios(url)
                .then(responce => {
                    const html = responce.data
                    const $ = cheerio.load(html)
                    const info = {}
                    let currentPos = ""
        
                    $("#league-tdkpynmB-table", html).children().each(function(){
                        let position = $(".profileTable__mainInfo", this).text()
                        const player = $(this).find('a').text()
        
                        if(position.length>0 && !(position in info)){
                            switch(position){
                                case "Вратари":
                                    position = "goalkeeper"
                                    break;
                                case "Защитники":
                                    position = "defender"
                                    break;
                                case "Полузащитники":
                                    position = "midfielder"
                                    break;
                                case "Нападающие":
                                    position = "forward"
                                    break;
                                case "Тренер":
                                    position = "coach"
                                    break;
        
                            }
                            info[position] = []
                            currentPos = position
                        }
        
                        if(player.length>0){
                            info[currentPos].push(player)
                        } 
        
                    })
                    info["logo"] = `https://s.ill.in.ua/i/football/team/logo/0x160/${logo}.png`
                    info["team"] = name
                    return info
                }).catch(err => console.log(err))
            data.then(value => res.json(value))
            
        }

    catch (e) {
        res.status(500).json({message : e})
    }
})

module.exports = router;