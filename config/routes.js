const express = require('express').Router

module.exports = ( server ) => {
  const router = express()

  server.use('/api', router)

  const users = require('../api/users/users.service')
  users.register(router, '/users')
}