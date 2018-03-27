const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose.connect('mongodb://localhost/nodejs', { useMongoClient: true })

const dbState = mongoose.connection

dbState.on('error', () => console.log(chalk.bold.red('Database not connected!')))
dbState.once('open', () => console.log(chalk.bold.blue('Database connected!')))

module.exports = mongoose