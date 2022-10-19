import axios from 'axios';
import config from '../config'

const getAll = async () => {
  try {
    const region = await axios.get(`${config.base_url}/api/regions`)
    return region.data;
  } catch (err) {
    return err.message;
  }
}

const addRegion = async (data) => {
  try {
    const region = await axios.post(`${config.base_url}/api/regions/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }})
    return region;
  } catch (err) {
    return err.message;
  }
}

const deleteRegion = async (id) => {
  try {
    const region = await axios.delete(`${config.base_url}/api/regions/${id}`)
    return region;
  } catch (err) {
    return err.message;
  }
}

const updateRegion = async (id) => {
  try {
    const region = await axios.patch(`${config.base_url}/api/regions/${id}`)
    return region;
  } catch (err) {
    return err.message;
  }
}

export default { getAll, deleteRegion, addRegion, updateRegion }
