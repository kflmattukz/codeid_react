import React, { useEffect, useState } from 'react'
import locationApi from '../../api/locationApi'

export default function CountryList({ editLocation, editForm }) {

  const [locations, setLocations] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const result = await locationApi.getAll()
      setLocations(result)
    }
    fetchData()
  },[false])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete Location with id ' + id)) {
      locationApi.deleteLocation(id).then(req => {
        if (req) {
          setLocations(prevLocations => prevLocations.filter(location => location.locationId !== id))
        }
      })
    }
  }

  const handleEdit = (location) => {
    editForm(true)
    editLocation({
      locationId: location.locationId,
      streetAddress: location.streetAddress,
      postalCode: location.postalCode,
      city: location.city,
      stateProvince: location.stateProvince,
      countryId: location.country.countryId
    })
  }

  return (
    <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
      <thead>
        <tr>
          <th className='border'>ID</th>
          <th className='border'>Street Address</th>
          <th className='border'>Postal Code</th>
          <th className='border'>City</th>
          <th className='border'>State Province</th>
          <th className='border'>Country</th>
          <th className='border'>Action</th>
        </tr>
      </thead>
      <tbody>
        { locations?.map(location => {
          return(
            <tr key={ location.locationId }>
              <td className='border text-center'>{ location.locationId }</td>
              <td className='border pl-1'>{ location.streetAddress }</td>
              <td className='border pl-1'>{ location.postalCode }</td>
              <td className='border pl-1'>{ location.city }</td>
              <td className='border pl-1'>{ location.stateProvince }</td>
              <td className='border pl-1'>{ location.country.countryName }</td>
              <td className='border flex justify-around'>
                <button
                  onClick={() => handleDelete(location.locationId) }
                  className='rounded border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                >Delete</button>
                <button
                  onClick={ () => handleEdit(location) }
                  className='rounded border-none bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm py-1 px-2'
                >Edit</button>
              </td>
            </tr>
          )
        }) }
      </tbody>
    </table>
  )
}
