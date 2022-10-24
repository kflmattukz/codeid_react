import React, { useEffect, useState } from 'react'
import countryApi from '../../api/countryApi'
import regionApi from '../../api/regionApi'

function CountryForm({ edit }) {

  const [regions,setRegions] = useState([])

  useEffect(() => {
    regionApi.getAll().then(data => setRegions(data))
  }, [])

  const [countryId, setCountryId] = useState(edit ? edit.countryId : '')
  const [countryName, setCountryName] = useState(edit ? edit.countryName : '')
  const [regionId, setRegionId] = useState(edit ? edit.regionId : '')
  const [notif, setNotif] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      countryApi.updateCountry(edit.countryId, {
        countryName,
        regionId: Number(regionId)
      }).then(req => {
        if (req) {
          setNotif(!notif)
        }
      })
    } else {
      countryApi.addCountry({
        countryId,
        countryName,
        regionId: Number(regionId)
      }).then(req => {
        if(req) {
          console.log('Add Sucsess')
          setNotif(!notif)
        }
      })
      console.log('submit')
    }
  }

  console.log(edit)

  if(notif) {
    setTimeout(() => {
      setNotif(!notif)
    }, 2000)
  }

  const handleChange = (e) => {
    if(e.target.name === 'countryId') return setCountryId(e.target.value)
    if(e.target.name === 'countryName') return setCountryName(e.target.value)
    if(e.target.name === 'region') return setRegionId(e.target.value)
  }

  return (
    <form className='mt-5 flex flex-col w-3/5 gap-3 text-gray-700' onSubmit={(e) => handleSubmit(e)}>
      { edit ? 
        <>
          <label htmlFor="countryId">Country Id</label>
          <input
            value={ countryId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="countryId" id="countryId" 
            // placeholder='ex. ID for Indonesia'
            disabled={ true }
            />
          <label htmlFor="countryName">Country Name</label>
          <input
            value={ countryName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="countryName" id="countryName"
            placeholder='Indonesia'
          />
          <label htmlFor="Region">Region</label>
          <select value={ regionId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="region" id="region" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Region -- </option>
            { regions?.map(region => {
              return (
                <option key={region.regionId} value={region.regionId}>{region.regionName}</option>
              )
            }) }
          </select>
          
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update Country</button>
        </> : 
        <>
          <label htmlFor="countryId">Country Id</label>
          <input
            value={ countryId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="countryId" id="countryId" 
            placeholder='ex. ID for Indonesia'
            />
          <label htmlFor="countryName">Country Name</label>
          <input
            value={ countryName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="countryName" id="countryName"
            placeholder='Indonesia'
          />
          <label htmlFor="Region">Region</label>
          <select value={ regionId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="region" id="region" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Region -- </option>
            { regions?.map(region => {
              return (
                <option key={region.regionId} value={region.regionId}>{region.regionName}</option>
              )
            }) }
          </select>
          
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Add Country</button>
        </>
      }

      <p>{ notif ? edit.countryId ? 'Update Country Success': 'Add Country Success !' : '' }</p>
    </form>
  )
}

export default CountryForm