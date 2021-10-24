const {Router} = require('express')
const axios = require('axios')  
const cheerio = require('cheerio')
const router = Router()

router.get("/", 
    async(req, res)=>{
    try{

        const url = "https://football.ua/england.html"
        console.log('rabotaet')


        const data = axios(url)
            .then(responce => {
                const html = responce.data
                const $ = cheerio.load(html)
                let id = 0
                const info2 = {}
        
                $(".tournament-table").children().children().each(function(){
                    let team = $(".team", this).text().replace(/(\r\n|\n|\r|\t)/gm, "")
                                                    .split(" ")
                                                    .filter(item => item.length > 0)
                                                    .join(" ")
        
                    let games = $(".games", this).text()
                    let points = $(".score", this).text()
                    let image = $(".team", this).children().find('img').attr('src')
                    
                    if (team.length > 0 && parseInt(games, 10) && parseInt(points, 10)){
                        info2["id_"+id] = {
                            team, games, points, image
                        }
                        id +=1
                    } 
                })   
                return info2
        }).catch(err => console.log(err))

        data.then(value => res.json(value))
        
    }
    catch (e) {
        res.status(500).json({message : e})
    }
})

module.exports = router;