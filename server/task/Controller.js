const Model = require("./Model")

class TaskController {
    constructor(app) {
        this.registerRoutes(app)
        this.model = new Model()
    }

    registerRoutes(app) {
        app.get('/tasks', (req, res) => this.getTasks(res))
        app.get('/tasks/:taskId', (req, res) => this.getTask(res, req.params))
    }
    
    async getTasks(res) {
        const result = await this.model.getTasks()
        res.json({ data: result.rows, count: result.rowCount })
    }

    async getTask(res, { taskId }) {
        const result = await this.model.getTask(taskId)
        
        if(result.rowCount)
            res.json({ data: result.rows[0] })
        else {
            res.status(404).send('task not found')
        }
    }
}

module.exports = TaskController;
