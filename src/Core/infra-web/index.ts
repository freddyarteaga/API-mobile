import config from 'config'
import express, { Request, Response, Router } from 'express'
import http from 'http'

export abstract class InfraWeb {
    public app: express.Application

    constructor() {
        this.app = express()
    }

    public use(middlewares: any): void {
        Object.keys(middlewares).forEach((key) => {
            this.app.use(middlewares[key].mountPoint, middlewares[key].handler)
        })
        this.app.use(express.static(`${__dirname}/public`))
    }

    public mountRoutes(routes: any): void {
        Object.keys(routes).forEach((key) => {
            this.app[routes[key].verb](routes[key].uri, routes[key].action)
        })
    }
    
    public listen() {
        const conf = config.get('server')
        const port: number = (conf as any).port
        this.app.listen(port, () => {
            console.log(`Servidor corriendo por el puerto ${port}`)
        })
    }
}