import { Controller } from '../Controllers'

export const Routes: { [index: string]: any } = {
    Home: {
        verb: 'get',
        uri: '/',
        action: Controller.home
    },
    Hotels: {
        verb: 'get',
        uri: '/flights',
        action: Controller.flights
    },
    hotel: {
        verb: 'get',
        uri: '/flight/:id',
        action: Controller.flight
    },
    createHotel: {
        verb: 'post',
        uri: '/flight',
        action: Controller.CreateFlight
    }
}