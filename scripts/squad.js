const PORT = 8000

const axios = require('axios')  
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = "https://www.flashscore.com.ua/team/chelsea/4fGZN2oK/squad/"

axios(url)
    .then(responce => {
        const html = responce.data
        const $ = cheerio.load(html)
        const info = {}
        let currentPos = ""

        $("#league-tdkpynmB-table", html).children().each(function(){
            const position = $(".profileTable__mainInfo", this).text()
            const player = $(this).find('a').text()

            if(position.length>0){
                if(!(position in info)){
                    info[position] = []
                    currentPos = position
                }
            }
            if(player.length>0){
                info[currentPos].push(player)
            } 
        })
    }).catch(err => console.log(err))

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))

