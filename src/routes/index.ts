import { Application, Router, Request, Response } from 'express'
import { IncomingMessage, ServerResponse } from 'http'
import httpProxy from 'http-proxy'
import RateLimit from 'express-rate-limit'

export default (app: Application): void => {
  const apiLimiter = new RateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again after 10 minutes.'
  })

  const routes = Router()
  const apiProxy = httpProxy.createProxyServer()
  const proxyMiddleware = (req: IncomingMessage, res: ServerResponse) => {
    apiProxy.web(req, res, {
      changeOrigin: true,
      target: 'https://api.github.com'
    })
  }

  app.use('/api', [apiLimiter, routes])

  routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Welcome! :)' })
  })
  routes.get('/users', proxyMiddleware)
  routes.get('/users/:username', proxyMiddleware)
  routes.get('/users/:username/repos', proxyMiddleware)
}
