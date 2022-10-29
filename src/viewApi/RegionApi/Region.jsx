import React, { useEffect, useState } from 'react';
import RegionForm from './RegionForm';
import { useSelector, useDispatch } from 'react-redux';
import { getRegions } from '../../redux/actions/region';

function Region() {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [editRegion, setEditRegion] = useState({});

  console.log(editRegion);

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  const regions = useSelector((state) => state.regions.regions);
  const loading = useSelector((state) => state.regions.isLoading);

  return (
    <div className='mt-5 w-4/5 mx-auto'>
      <button
        onClick={() => {
          setEditRegion({}), setShowForm(!showForm);
        }}
        className='py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md shadow-sm active:shadow-lg duration-300'
      >
        {showForm ? 'List Regions' : 'Add Region'}
      </button>
      {showForm ? (
        editRegion?.regionId ? (
          <>
            <RegionForm edit={editRegion} />
          </>
        ) : (
          <>
            <RegionForm />
          </>
        )
      ) : (
        <>
          <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
            <thead>
              <tr>
                <th className='border p-2'>ID</th>
                <th className='border p-2'>Region Name</th>
                <th className='border p-2'>Region File</th>
                <th className='border p-2'>Region Photo</th>
                <th className='border p-2'>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions?.map((region) => (
                <tr key={region.regionId}>
                  <td className='border p-1 text-center'>{region.regionId}</td>
                  <td className='border p-1'>{region.regionName}</td>
                  <td className='border p-1'>{region.regionFile}</td>
                  <td className='border p-1'>{region.regionPhoto}</td>
                  <td className='border p-1 flex gap-2'>
                    <button
                      className='bg-red-600 hover:bg-red-700 px-2 rounded-sm outline-none text-gray-50 font-semibold'
                      // onClick={dispatch(removeRegion({ id: region.regionId }))}
                    >
                      Delete
                    </button>
                    <button
                      className='bg-yellow-500 hover:bg-yellow-600 px-2 rounded-sm outline-none text-gray-100 font-semibold'
                      onClick={() => {
                        setEditRegion(region), setShowForm(!showForm);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Region;
