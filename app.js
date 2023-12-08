const express = require('express')
const app = express()
const port = 3000

const userrouter = require('./routes/users.route');
app.use(express.json())
app.use('/',userrouter)

app.listen(port,()=> {
    console.log(`app is listening on ${port}`)
})

const routes = require('./routes/health.route')
app.use(routes)




