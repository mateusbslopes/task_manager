const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3000

const taskController = require('./task/Controller')
new taskController(app)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
