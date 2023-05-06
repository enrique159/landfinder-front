import axios from 'axios'

export default {
  getAll() {
    return axios.get(`/variables`)
    .then(response => response)
    .catch(error => error.response);
  },
}
