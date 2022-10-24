import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/locations`)
    .then(request => request.data)
    .catch(err => err);
}

const addLocation = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/locations`, data)
  .then(request => request.data)
  .catch(err => console.log(err))
}

const deleteLocation = async (id) => {
  return await axios.delete(`${config.base_url}/api/locations/${id}`)
    .then(request => request.data)
}

const updateLocation = async (id, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/locations/${id}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addLocation, updateLocation, deleteLocation }
