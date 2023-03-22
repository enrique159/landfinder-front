import axios from 'axios'
import store from '@/store'

export default {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'authorization': 'Bearer ' + store.state.token
  },

  me() {
    return axios.get('/users/me', { headers: this.headers })
      .then(response => response)
      .catch(error => error.response);
  },
  updateUser(id, data) {
    return axios.put(`/users/${id}`, data, { headers: this.headers })
      .then(response => response)
      .catch(error => error.response);
  }
}