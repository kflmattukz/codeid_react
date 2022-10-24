import React, { useEffect, useState } from 'react'
import countryApi from '../../api/countryApi'
import CountryForm from './CountryForm'

export default function CountryList({ editCountry, editForm }) {

  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const result = await countryApi.getAll()
      setCountries(result)
    }
    fetchData()
  },[false])

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete Country with id ' + id)) {
      countryApi.deleteCountry(id).then(req => {
        if (req) console.log('Delete Succsess')
      })
    }
  }

  const handleEdit = (country) => {
    editForm(true)
    editCountry({
      countryId: country.countryId,
      countryName: country.countryName,
      regionId: country.region.regionId
    })
  }

  return (
    <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
      <thead>
        <tr>
          <th className='border'>ID</th>
          <th className='border'>Country Name</th>
          <th className='border'>Region</th>
          <th className='border'>Action</th>
        </tr>
      </thead>
      <tbody>
        { countries?.map(country => {
          return(
            <tr key={ country.countryId }>
              <td className='border text-center'>{ country.countryId }</td>
              <td className='border pl-1'>{ country.countryName }</td>
              <td className='border pl-1'>{ country.region.regionName }</td>
              <td className='border flex justify-around'>
                <button
                  onClick={() => handleDelete(country.countryId) }
                  className='rounded border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                >Delete</button>
                <button
                  onClick={ () => handleEdit(country) }
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
