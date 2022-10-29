import React, { useState } from 'react';
import regionApi from '../../api/regionApi';

function RegionForm({ edit }) {
  const [regionId, setRegionId] = useState(edit ? edit.regionId : '');
  const [regionName, setRegionName] = useState(edit ? edit.regionName : '');
  const [regionFile, setRegionFile] = useState(null);
  const [regionPhoto, setRegionPhoto] = useState(null);

  const [notif, setNotif] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (edit.regionId) {
      // regionApi.updateRegion(region.regionId,{region})
      handleEdit(regionId, {
        regionId,
        regionName,
        regionFile,
        regionPhoto,
      });
      setNotif(!notif);
    } else {
      const result = await regionApi.addRegion({
        regionName,
        regionFile,
        regionPhoto,
      });
      if (result) {
        setNotif(!notif);
      }
    }
  };

  if (notif) {
    setTimeout(() => {
      setNotif(!notif);
    }, 2000);
  }

  const handleChange = (e) => {
    if (e.target.name === 'regionName') setRegionName(e.target.value);
    if (e.target.name === 'regionFile') setRegionFile(e.target.files[0]);
    if (e.target.name === 'regionPhoto') setRegionPhoto(e.target.files[0]);
  };

  return (
    <div className='mt-5'>
      <form
        onSubmit={(e) => submitHandler(e)}
        encType='multipart/form-data'
        className='flex flex-col w-1/2 gap-3 text-gray-700'
      >
        {edit?.regionId ? (
          <>
            <label htmlFor='regionId'></label>
            <input
              className='px-2 py-1 rounded bg-white ring-blue-400'
              type='text'
              disabled={true}
              name='regionId'
              value={regionId}
            />
            <label htmlFor='regionName' className='font-semibold'>
              Region Name
            </label>
            <input
              value={regionName}
              className='px-2 py-1 rounded focus:outline-none focus:ring ring-blue-400'
              onChange={(e) => handleChange(e)}
              type='text'
              name='regionName'
              id='regionName'
            />
            <label htmlFor='regionFile' className='font-semibold'>
              Region File
            </label>
            <input
              // value={ regionFile }
              onChange={(e) => handleChange(e)}
              type='file'
              name='regionFile'
              id='regionFile'
            />
            <label htmlFor='regionPhoto' className='font-semibold'>
              Region Photo
            </label>
            <input
              // value={ regionPhoto }
              onChange={(e) => handleChange(e)}
              type='file'
              name='regionPhoto'
              id='regionPhoto'
            />
            <button
              type='submit'
              className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 font-semibold rounded-md hover:shadow-md duration-300'
            >
              Update Region
            </button>
          </>
        ) : (
          <>
            <label htmlFor='regionName' className='font-semibold'>
              Region Name
            </label>
            <input
              // value={ regionName }
              className='px-2 py-1 rounded focus:outline-none focus:ring ring-blue-400'
              onChange={(e) => handleChange(e)}
              type='text'
              name='regionName'
              id='regionName'
            />
            <label htmlFor='regionFile' className='font-semibold'>
              Region File
            </label>
            <input
              // value={ regionFile }
              onChange={(e) => handleChange(e)}
              type='file'
              name='regionFile'
              id='regionFile'
            />
            <label htmlFor='regionPhoto' className='font-semibold'>
              Region Photo
            </label>
            <input
              // value={ regionPhoto }
              onChange={(e) => handleChange(e)}
              type='file'
              name='regionPhoto'
              id='regionPhoto'
            />
            <button
              type='submit'
              className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 font-semibold rounded-md hover:shadow-md duration-300'
            >
              Input Region
            </button>
          </>
        )}
      </form>
      <p className='mt-5 text-gray-700 font-semibold text-lg'>
        {notif
          ? edit.regionId
            ? 'Update Region Success'
            : 'Add Region Success'
          : ''}
      </p>
    </div>
  );
}

export default RegionForm;
