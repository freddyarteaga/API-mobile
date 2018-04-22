import { Response, Request } from 'express'

export const Controller = {
    home: (req: Request, res: Response) => {
        res.send("home")
    },
    flights: (req: Request, res: Response) => {
        res.send("flights")
    },
    flight: (req: Request, res: Response) => {
        res.send("flight")
    },
    CreateFlight: (req: Request, res: Response) => {
        res.send("create")
    }
}