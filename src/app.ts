import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.express.disable('x-powered-by')
      this.express.use(helmet())
      
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private routes (): void {
      routes(this.express)
    }
}

export default new App().express
