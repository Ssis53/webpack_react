import axios from 'axios';

export const getDetail = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
}
