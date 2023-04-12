import axios from 'axios'

export default {
  pop : '?populate=*',
  top_list: '&filters[top_list][$eq]=true',

  getAll() {
    return axios.get(`/projects${this.pop}`)
    .then(response => response)
    .catch(error => error.response);
  },
  getByLocation(id_location) {
    return axios.get(`/projects${this.pop}&filters[city][$eq]=${id_location}`)
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
  },
  getByCompany(id_company) {
    return axios.get(`/projects${this.pop}&filters[id_company][id][$eq]=${id_company}`)
    .then(response => response)
    .catch(error => error.response);
  }
}

