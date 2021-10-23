const axios = require('axios')  
const cheerio = require('cheerio')

const url = "https://football.ua/england.html"

axios(url)
    .then(responce => {
        const html = responce.data
        const $ = cheerio.load(html)
        const info = []

        $(".tournament-table").children().children().each(function(){
            let team = $(".team", this).text().replace(/(\r\n|\n|\r|\t)/gm, "")
                                              .split(" ")
                                              .filter(item => item.length > 0)
                                              .join(" ")

            let games = $(".games", this).text()
            let points = $(".score", this).text()
            let image = $(".team", this).children().find('img').attr('src')
            
            if (team.length > 0 && parseInt(games, 10) && parseInt(points, 10)){
                info.push({
                    team, games, points, image
                })
            }
            
        })

        console.log(info)
        
        
    }).catch(err => console.log(err))





