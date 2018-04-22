process.env.NODE_CONFIG_DIR = `${__dirname}/env`;
import { middleware } from './Middlewares'
import { InfraWeb } from './Core/infra-web'
import { Routes } from './Routes'

export default class Server extends InfraWeb {
    constructor() {
        super()
        this.use(middleware)
        this.mountRoutes(Routes)
    }
    public static bootstrap(): Server {
        return new Server()
    }
}
Server.bootstrap().listen()