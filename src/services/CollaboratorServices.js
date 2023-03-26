import axios from 'axios'
import store from '@/store';

export default {
  getAll(query) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': `Bearer ${store.getters.getToken}`
    }
    return axios.get('/collaborators/', { headers })
      .then(response => response)
      .catch(error => error.response);
  },
}