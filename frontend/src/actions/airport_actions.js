import { getAirport } from '../utils/airport_api_util';

export const RECEIVE_AIRPORT = "RECEIVE_AIRPORT";

const receiveAirport = airport => ({
    type: RECEIVE_AIRPORT,
    airport
});


export const fetchAirport = (airport_id) => dispatch => (
    getAirport(airport_id)
        .then(airport => dispatch(receiveAirport(airport)))
)