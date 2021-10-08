const express = require('express')
const config = require('config')
const mongoose = mongoose('mongoose')

const app = express()

app.use('/api/auth', require("./routes/auth.routes"))

const PORT = config.get('port') || 5000

async function start(){
    try{
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    }
    catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

app.listen(5000, ()=>{
    console.log(`app has been started on port ${PORT}`)
})