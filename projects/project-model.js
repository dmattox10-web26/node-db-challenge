const db = require('../data/db-config')

module.exports = {
    insertRes,
    findRes,
    insertProject,
    findProjects,
    insertTask,
    findTasks
}

function insertRes(resource) {
    return db('resources')
        .insert(resource, 'id')
}

function findRes() {
    return db('resources')
}

function insertProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function findProjects() {
    return db('projects')
}

function insertTask(task) {
    return db('tasks')
        .insert(task, 'id')
}

function findTasks(project_id) {
    return db('tasks')
    .where({ project_id })
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name', 'tasks.description')
}


