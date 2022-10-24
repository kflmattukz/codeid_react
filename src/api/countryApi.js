import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/countries`)
    .then(request => request.data)
    .catch(err => err);
}

const addCountry = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/countries`, data)
  .then(request => request.data)
  .catch(err => console.log(err))
}

const deleteCountry = async (id) => {
  return await axios.delete(`${config.base_url}/api/countries/${id}`)
    .then(request => request.data)
}

const updateCountry = async (id, data) => {
  return await axios.patch(`${config.base_url}/api/countries/${id}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addCountry, updateCountry, deleteCountry }
