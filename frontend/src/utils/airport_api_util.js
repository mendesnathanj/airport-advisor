import axios from 'axios';


export const fetchAirports = () => (
    axios.get('/api/airports')
);

export const getAirports = (airport_id) => {
    return axios.get(`/api/airports/${airport_id}`)
}
