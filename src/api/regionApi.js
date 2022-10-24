import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/regions`)
    .then(request => request.data)
    .catch(err => err);
}

const addRegion = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/regions`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
  }})
  .then(request => request.data)
  .catch(err => console.log(err))
}

const deleteRegion = async (id) => {
  return await axios.delete(`${config.base_url}/api/regions/${id}`)
    .then(request => request.data)
}

const updateRegion = async (id, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/regions/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, deleteRegion, addRegion, updateRegion }
