import axios from 'axios'
import store from '@/store';

export default {
  getAll(query) {
    return axios.get('/collaborators/')
      .then(response => response)
      .catch(error => error.response);
  },
}