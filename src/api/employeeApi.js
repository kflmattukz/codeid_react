import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/employees`)
    .then(request => request.data)
    .catch(err => err);
}

const addEmployee = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/employees`, data)
  .then(request => request.data)
  .catch(err => console.log(err))
}

const getOne = async (employeeId) => {
  return await axios.get(`${config.base_url}/api/employees/${employeeId}`)
    .then(req => req.data)
    .catch(err => err);
}

const deleteEmployee = async (id) => {
  return await axios.delete(`${config.base_url}/api/employees/${id}`)
    .then(request => request.data)
}

const updateEmployee = async (id, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/employees/${id}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addEmployee, updateEmployee, deleteEmployee, getOne }
