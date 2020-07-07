const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 3000

const instantMongoCrud = require('express-mongo-crud')

mongoose.connect('database:27017/mongocrud')

const options = {
  host: `localhost:${PORT}`
}

app.use(bodyParser.json())
app.use(instantMongoCrud(options))

app.get('/', (req, res) => {
  res.send('/')
})

app.listen(PORT, () => {
  console.log('Started')
})
