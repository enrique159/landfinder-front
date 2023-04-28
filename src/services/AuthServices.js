import axios from 'axios'
import store from '@/store'

export default {
  login(email, password) {
    return axios.post('/auth/local', { identifier: email, password })
      .then(response => response)
      .catch(error => error.response);
  },
  signup(user) {
    return axios.post('/auth/local/register', user)
      .then(response => response)
      .catch(error => error.response);
  },
  forgotPassword(email) {
    return axios.post('/auth/forgot-password/', {email: email})
      .then(response => response)
      .catch(error => error.response);
  },
  resetPassword(payload) {
    return axios.post('/auth/reset-password/', payload)
      .then(response => response)
      .catch(error => error.response);
  },
  changePassword(payload) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': `Bearer ${store.getters.getToken}`
    }
    return axios.post('/auth/change-password/', payload, { headers })
      .then(response => response)
      .catch(error => error.response);
  },
  sendEmailConfirmation(email) {
    return axios.post('/auth/send-email-confirmation/', {email: email})
      .then(response => response)
      .catch(error => error.response);
  }
}