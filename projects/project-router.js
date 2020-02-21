const express = require('express')

const Projects = require('./project-model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.findProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    Projects.insertProject(req.body)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/resources', (req, res) => {
    Projects.findRes()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/resources', (req, res) => {
    Projects.insertRes(req.body)
    .then(id => {
        res.status(200).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/tasks/:id', (req, res) => {
    Projects.findTasks(req.params.id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/tasks', (req, res) => {
    Projects.insertTask(req.body)
    .then(id => {
        res.status(200).json(id)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router