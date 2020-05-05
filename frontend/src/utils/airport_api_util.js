import axios from 'axios';

export const fetchAirports = () => (
    axios.get('/api/airports')
);

export const getAirport = (airport_id) => {
    return axios.get(`/api/airports/${airport_id}`)
}

export const searchAirports = query => (
    axios.get(`/api/airports/search?query=${query}`)
)
