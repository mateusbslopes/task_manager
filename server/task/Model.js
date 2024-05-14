const pg =  require('pg')

class Model {

    constructor() {
        const { Client } = pg
        this.client = new Client({
            database: 'task_manager'
        })
        
    }

    async getTasks() {
        await this.client.connect()
        const result = await this.client.query("SELECT id_tasks, title, description FROM TASKS") 
        await this.client.end()
        return result
    }

    async getTask(id) {
        await this.client.connect()
        const result = await this.client.query("SELECT id_tasks, title, description FROM TASKS WHERE id_tasks = $1", [id]) 
        await this.client.end()
        return result
    }
}

module.exports = Model
