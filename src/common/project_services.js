import axios from 'axios'

export default {
  pop : '?populate=id_company',
  top_list: '&filters[top_list][$eq]=true',

  getAll() {
    return axios.get(`/projects${this.pop}`)
    .then(response => response)
    .catch(error => error.response);
  },
  getTopList() {
    return axios.get(`/projects${this.pop}${this.top_list}`)
    .then(response => response)
    .catch(error => error.response);
  },
  getById(id) {
    return axios.get(`/projects/${id}${this.pop}`)
    .then(response => response)
    .catch(error => error.response);
  }
}

