import axios from 'axios'

export default {
  url : '/projects?populate=*',
  top_list: '&filters[top_list][$eq]=true',

  getAll() {
    return axios.get(`${this.url}`)
    .then(response => response)
    .catch(error => error.response);
  },
  getTopList() {
    return axios.get(`${this.url}${this.top_list}`)
    .then(response => response)
    .catch(error => error.response);
  }
}

