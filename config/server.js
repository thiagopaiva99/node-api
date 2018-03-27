const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const port = 3000
const chalk = require('chalk')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => console.log(chalk.bold.blue(`\nServer running at port ${port}`)))

module.exports = server