import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/jobs`)
    .then(request => request.data)
    .catch(err => err);
}

const addJob = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/jobs`, data)
  .then(request => request.data)
  .catch(err => console.log(err))
}

const deleteJob = async (id) => {
  return await axios.delete(`${config.base_url}/api/jobs/${id}`)
    .then(request => request.data)
}

const updateJob = async (id, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/jobs/${id}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addJob, updateJob, deleteJob }
