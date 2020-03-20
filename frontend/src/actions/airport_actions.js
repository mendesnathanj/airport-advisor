export { getAirport } from '../utils/airport_api_util';

export const RECEIVE_AIRPORT = "RECEIVE_AIRPORT";

const receiveAirport = airport_id => ({
    type: RECEIVE_AIRPORT,
    airport_id
});


export const fecthAirport = (airport_id) => dispatch (
    getAirport(airport_id)
        .then(airport_id => dispatch(receiveAirport(airport_id)))
)