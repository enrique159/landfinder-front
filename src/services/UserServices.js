import axios from 'axios'
import store from '@/store';

export default {
  me() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': `Bearer ${store.getters.getToken}`
    }
    return axios.get('/users/me', { headers })
      .then(response => response)
      .catch(error => error.response);
  },

  updateUser(id, data) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': `Bearer ${store.getters.getToken}`
    }
    return axios.put(`/users/${id}`, data, { headers })
      .then(response => response)
      .catch(error => error.response);
  }
}