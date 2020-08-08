const express = require('express')

const app = express()
const Port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('test vue')
})

app.listen(Port, () => {
    console.log('Working')
})