import axios from 'axios';
import config from '../config'

const getAll = async () => {
  return axios.get(`${config.base_url}/api/jh`)
    .then(request => request.data)
    .catch(err => err);
}

const addJh = async (data) => {
  console.log(data)
  return await axios.post(`${config.base_url}/api/jh`, data)
  .then(request => request.data)
  .catch(err => console.log(err))
}

const deleteJh = async (jobid, employeeid) => {
  return await axios.delete(`${config.base_url}/api/jh/${jobid}/${employeeid}`)
    .then(request => request.data)
}

const updateJh = async (jobid, employeeid, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/jh/${jobid}/${employeeid}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addJh, updateJh, deleteJh }
