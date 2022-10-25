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

const deleteJh = async (employeeid, jobid) => {
  return await axios.delete(`${config.base_url}/api/jh/${employeeid}/${jobid}`)
    .then(request => request.data)
}

const updateJh = async (employeeid, jobid, data) => {
  console.log(data)
  return await axios.patch(`${config.base_url}/api/jh/${employeeid}/${jobid}`, data)
    .then(request => request.data)
    .catch(err => err)
}

export default { getAll, addJh, updateJh, deleteJh }
