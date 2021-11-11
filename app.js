const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require("./routes/auth.routes"))
app.use('/api/info', require("./routes/info.routes"))
app.use('/api/players', require("./routes/players.routes"))
app.use('/api/table', require("./routes/table.routes"))
app.use('/api/team', require("./routes/team.routes"))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        app.listen(PORT, () => {
            console.log(`app has been started on port ${PORT}`)
        })

    }
    catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

