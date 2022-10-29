import axios from 'axios';

const addRegionRequest = (data) => {
  return axios.post(
    'http://localhost:3000/api/regions',
    { ...data },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export default addRegionRequest;
