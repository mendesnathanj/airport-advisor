import * as APIUtil from '../utils/airport_api_util';

export const RECEIVE_AIRPORT = "RECEIVE_AIRPORT";
export const RECEIVE_AIRPORTS = 'RECEIVE_AIRPORTS';

const receiveAirport = airport_id => ({
    type: RECEIVE_AIRPORT,
    airport_id
});

const receiveAirports = airports => ({
    type: RECEIVE_AIRPORTS,
    airports
});


export const fetchAirports = () => dispatch => (
    APIUtil.fetchAirports()
        .then(airports => dispatch(receiveAirports(airports)))
);


// export const fetchAirport = (airport_id) => dispatch (
//     APIUtil.getAirport(airport_id)
//         .then(airport_id => dispatch(receiveAirport(airport_id)))
// )
