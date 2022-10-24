import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/departments`)
    .then(request => request.data)
    .catch(err => err);
}

const addDepartment = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/departments`, data)
  .then(request => request.data)
  .catch(err => console.log(err))
}

const deleteDepartment = async (id) => {
  return await axios.delete(`${config.base_url}/api/departments/${id}`)
    .then(request => request.data)
}

const updateDepartment = async (id, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/departments/${id}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addDepartment, updateDepartment, deleteDepartment }
