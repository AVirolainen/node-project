const axios = require('axios')  
const cheerio = require('cheerio')

const url = "https://ru.whoscored.com/Regions/252/Tournaments/2/%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F-%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F-1"

const info = []

async function getTable() {
    axios(url)
        .then(responce => {
            const html = responce.data
            const $ = cheerio.load(html)
            $(".team-pitch-formation").each(function(){
                console.log(1)
                
            })  
    })
}

getTable().then()








