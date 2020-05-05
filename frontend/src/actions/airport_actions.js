import * as APIUtil from '../utils/airport_api_util';

export const RECEIVE_AIRPORT = "RECEIVE_AIRPORT";
export const RECEIVE_AIRPORTS = 'RECEIVE_AIRPORTS';
export const RECEIVE_SEARCH_ITEMS = "RECEIVE_SEARCH_ITEMS";

const receiveAirport = airport => ({
    type: RECEIVE_AIRPORT,
    airport
});

const receiveAirports = airports => ({
    type: RECEIVE_AIRPORTS,
    airports
});

const receiveSearchItems = airports => ({
    type: RECEIVE_SEARCH_ITEMS,
    airports
})


export const fetchAirports = () => dispatch => (
    APIUtil.fetchAirports()
        .then(airports => dispatch(receiveSearchItems(airports)))
);

export const searchAirports = query => dispatch => (
    APIUtil.searchAirports(query)
        .then(airports => dispatch(receiveAirports(airports)))
)


export const fetchAirport = (airport_id) => dispatch => (
    APIUtil.getAirport(airport_id)
        .then(airport => dispatch(receiveAirport(airport)))
)
