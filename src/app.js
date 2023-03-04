import express from 'express'
import routes from './routes.js'

import './database/migrations/20230303182342-create-users.js'

class App {
  constructor () {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
  }

  routes () {
    this.app.use(routes)  
  }
}

export default new App().app
