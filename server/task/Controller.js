const Model = require("./Model")

class TaskController {

    constructor(app) {
        this.registerRoutes(app)
        this.model = new Model()
    }

    registerRoutes(app) {
        app.get('/tasks', (req, res) => this.getTasks(req, res))
        app.get('/tasks/:taskId', (req, res) => this.getTask(req, res))
    }
    
    async getTasks(req, res) {
        const result = await this.model.getTasks()
        res.json({ data: result.rows, count: result.rowCount })
    }

    async getTask(req, res) {
        const result = await this.model.getTask(req.params.taskId)
        
        if(result.rowCount)
            res.json({ data: result.rows[0] })
        else {
            res.status(404).send('task not found')
        }
    }

}

module.exports = TaskController;
