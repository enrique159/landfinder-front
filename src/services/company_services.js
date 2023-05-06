import axios from 'axios'

export default {
  getAll() {
    return axios.get('/companies')
    .then(response => response)
    .catch(error => error.response);
  },
  getById(id) {
    return axios.get(`/companies/${id}`)
    .then(response => response)
    .catch(error => error.response);
  }
}