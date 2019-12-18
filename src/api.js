import axios from 'axios';

export const getNetsFromApi = () => axios.get(`http://api.citybik.es/v2/networks`);
