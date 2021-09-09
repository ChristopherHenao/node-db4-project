const express = require('express')
const helmet = require('helmet')
const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/recipes', recipesRouter)

server.use((error, req, res, next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        message: error.message,
        stack: error.stack
    })
})

module.exports = server