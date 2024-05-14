const Model = require("./Model")

class TaskController {
    constructor(app) {
        this.registerRoutes(app)
        this.model = new Model()
    }

    registerRoutes(app) {
        app.get('/tasks', (req, res) => this.getTasks(res))
        app.get('/tasks/:taskId', (req, res) => this.getTask(res, req.params.taskId))
    }
    
    async getTasks(res) {
        const tasks = await this.model.getTasks()
        res.json({ data: tasks.rows, count: tasks.rowCount })
    }

    async getTask(res, taskId) {
        const task = await this.model.getTask(taskId)
        
        if(task.rowCount)
            res.json({ data: tasks.rows[0] })
        else {
            res.status(404).send('task not found')
        }
    }
}

module.exports = TaskController;
