import React, { useEffect, useState } from 'react'
import locationApi from '../../api/locationApi'
import countryApi from '../../api/countryApi'

function LocationForm({ edit }) {

  const [countries,setCountries] = useState([])

  useEffect(() => {
    countryApi.getAll().then(data => setCountries(data))
  }, [])

  const [locationId, setLocationId] = useState(edit ? edit.locationId : '')
  const [streetAddress, setStreetAddress] = useState(edit ? edit.streetAddress : '')
  const [postalCode, setPostalCode] = useState(edit ? edit.postalCode : '')
  const [city, setCity] = useState(edit ? edit.city : '')
  const [stateProvince, setStateProvince] = useState(edit ? edit.stateProvince : '')
  const [countryId, setCountryId] = useState(edit ? edit.countryId : '')
  const [notif, setNotif] = useState(false)

  // {
  //   "locationId": 1400,
  //   "streetAddress": "2014 Jabberwocky Rd",
  //   "postalCode": "26192",
  //   "city": "Southlake",
  //   "stateProvince": "Texas",
  //   "country": {
  //     "countryId": "US",
  //     "countryName": "United States of America"
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      locationApi.updateLocation(edit.locationId, {
        streetAddress,
        postalCode,
        city,
        stateProvince,
        countryId
      }).then(req => {
        if (req) {
          setNotif(!notif)
        }
      })
    } else {
      locationApi.addLocation({
        streetAddress,
        postalCode,
        city,
        stateProvince,
        countryId
      }).then(req => {
        if(req) {
          console.log('Add Sucsess')
          setNotif(!notif)
        }
      })
      console.log('submit')
    }
  }

  if(notif) {
    setTimeout(() => {
      setNotif(!notif)
    }, 2000)
  }

  const handleChange = (e) => {
    if(e.target.name === 'streetAddress') return setStreetAddress(e.target.value)
    if(e.target.name === 'postalCode') return setPostalCode(e.target.value)
    if(e.target.name === 'city') return setCity(e.target.value)
    if(e.target.name === 'stateProvince') return setStateProvince(e.target.value)
    if(e.target.name === 'countryId') return setCountryId(e.target.value)
  }

  return (
    <form className='mt-5 flex flex-col w-3/5 gap-3 text-gray-700' onSubmit={(e) => handleSubmit(e)}>
      { edit ? 
        <>
          <label htmlFor="locationId">Location ID</label>
          <input
            value={ locationId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="locationId" id="locationId" 
            disabled={true}
            />
          <label htmlFor="streetAddress">Street Address</label>
          <input
            value={ streetAddress }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="streetAddress" id="streetAddress" 
            placeholder='ex. ID for Indonesia'
            />
          <label htmlFor="postalCode">Postal Code</label>
          <input
            value={ postalCode }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="postalCode" id="postalCode"
            placeholder='14045'
          />
          <label htmlFor="city">City</label>
          <input
            value={ city }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="city" id="city"
            placeholder='Tokyo'
          />
          <label htmlFor="stateProvince">State Province</label>
          <input
            value={ stateProvince }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="stateProvince" id="stateProvince"
            placeholder='Tokyo To'
          />
          <label htmlFor="countryId">Country</label>
          <select value={ countryId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="countryId" id="countryId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose country -- </option>
            { countries?.map(country => {
              return (
                <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
              )
            }) }
          </select>
          
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update location</button>
        </> : 
        <>
          <label htmlFor="streetAddress">Street Address</label>
          <input
            value={ streetAddress }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="streetAddress" id="streetAddress" 
            placeholder='2014 Jabberwocky Rd'
            />
          <label htmlFor="postalCode">Postal Code</label>
          <input
            value={ postalCode }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="postalCode" id="postalCode"
            placeholder='14045'
          />
          <label htmlFor="city">City</label>
          <input
            value={ city }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="city" id="city"
            placeholder='Tokyo'
          />
          <label htmlFor="stateProvince">State Province</label>
          <input
            value={ stateProvince }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm'
            onChange={(e) => handleChange(e)}
            type="text" name="stateProvince" id="stateProvince"
            placeholder='Tokyo To'
          />
          <label htmlFor="countryId">Country</label>
          <select value={ countryId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="countryId" id="countryId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose country -- </option>
            { countries?.map(country => {
              return (
                <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
              )
            }) }
          </select>
          
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Add location</button>
        </>
      }

      <p>{ notif ? edit ? 'Update location Success': 'Add location Success !' : '' }</p>
    </form>
  )
}

export default LocationForm;