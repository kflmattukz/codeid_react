import React, { useEffect, useState } from 'react'
import regionApi from '../api/regionApi'
import RegionForm from './RegionForm';

function Region() {

  const [regions,setRegions] = useState([])
  const [reload, setReload] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    regionApi.getAll().then(data => {
      setRegions(data);
    })
    setReload(false)
  },[reload])

  const handleDelete = (id) => {
    regionApi.deleteRegion(id).then(data => {
      console.log(data)
      setReload(true)
    })
  }

  const handleEdit = (id) => {
    regionApi.updateRegion(id).then(data => {
      console.log(data)
      setReload(true)
    })
  }
  
  return (
    <div className='mt-5 w-4/5 mx-auto'>
      <button  onClick={() => setShowForm(!showForm)} className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 font-semibold rounded-md hover:shadow-md duration-300'>{ showForm ? 'List Region' : 'Add Region' }</button>
      { showForm ? 
        <RegionForm  reload={setReload} /> :  
        <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
        <thead>
          <tr>
            <th className='border p-1 px-2'>ID</th>
            <th className='border p-1'>Region Name</th>
            <th className='border p-1'>Region File</th>
            <th className='border p-1'>Region Photo</th>
            <th className='border p-1'>Action</th>
          </tr>
        </thead>
        <tbody>
          { regions.map(region => {
            return(
              <tr key={region.regionId}>
                <td className='border text-center p-1'>{region.regionId}</td>
                <td className='border p-1'>{region.regionName}</td>
                <td className='border truncate p-1'>{region.regionFile}</td>
                <td className='border truncate p-1'>{region.regionPhoto}</td>
                <td className='border flex p-1 gap-1 justify-around'>
                  <button
                    className='rounded bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                    onClick={() => handleDelete(region.regionId)}
                  >
                    Delete
                  </button>
                  <button
                    className='rounded bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm p-2'
                    onClick={() => handleEdit(region.regionId)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          }) }
        </tbody>
      </table>
      }
    </div>
  )
}

export default Region