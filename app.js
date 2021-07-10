const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
