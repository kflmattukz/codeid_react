import React, { useState } from 'react'
import LocationForm from './LocationForm'
import LocationList from './LocationList'

function Location() {

  const [showForm, setShowForm] = useState(false)
  const [locationEdit, setLocationEdit] = useState({
    locationId: 0,
    streetAddress: '',
    postalCode: '',
    city: '',
    stateProvince:'',
    countryId: ''
  })

  return (
    <div className='mt-5 w-4/5 mx-auto'>
      <button 
        onClick={() => {setLocationEdit({}) ,setShowForm(!showForm)} }
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
      >
        { showForm ? 'List Location' : 'Add Location' }
      </button>
      { showForm ? locationEdit.countryId ? <LocationForm edit={ locationEdit } /> : <LocationForm /> : <LocationList editLocation={ setLocationEdit } editForm={ setShowForm }  /> }
    </div>
  )
}

export default Location;