import axios from 'axios'

export default {
  login(email, password) {
    return axios.post('/auth/local', { identifier: email, password })
      .then(response => response)
      .catch(error => error.response);
  }
}