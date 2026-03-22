require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { todoRouter } = require('./routes/todo.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', todoRouter)

app.listen(process.env.PORT || 3001, () =>
    console.log('Server running on port ' + process.env.PORT))