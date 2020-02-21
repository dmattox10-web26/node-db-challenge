const express = require('express')

const projectRouter = require('./projects/project-router')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>')
})

server.use('/api/projects', projectRouter)

module.exports = server