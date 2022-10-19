import React, { useState } from 'react'
import regionApi from '../api/regionApi'
function RegionForm({reload}) {

  const [region, setRegion] = useState({
    regionName: '',
    regionFile: '',
    regionPhoto: ''
  })

  const [notif, setNotif] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    regionApi.addRegion(region).then(data => {
      if (data.status === 201) {
        reload(true)
        setNotif(!notif)
      }
    })
  }

  if (notif) {
    setTimeout(() => {
      setNotif(!notif)
    }, 2000)
  }
  
  const changeHandler = (e) => {
    if(e.target.name === 'regionName') {
      setRegion(prevRegion => {
        prevRegion.regionName = e.target.value
        return prevRegion
      })
    } else if (e.target.name === 'regionFile') {
      setRegion(prevRegion => {
        prevRegion.regionFile = e.target.files[0]
        return prevRegion
      })
    } else if (e.target.name === 'regionPhoto') {
      setRegion(prevRegion => {
        prevRegion.regionPhoto = e.target.files[0]
        return prevRegion
      })
    }

  }

  return (
    <div className='mt-5'>
      <form  onSubmit={ (e) => submitHandler(e) } encType='multipart/form-data' className='flex flex-col w-1/2 gap-3 text-gray-700'>
        <label htmlFor="regionName" className='font-semibold'>Region Name</label>
        <input 
          // value={region.regionName}
          className='px-2 py-1 rounded focus:outline-none focus:ring ring-blue-400'
          onChange={(e) => changeHandler(e)} type="text" name="regionName" id="regionName" />
        <label htmlFor="regionFile" className='font-semibold'>Region File</label>
        <input 
          // value={region.regionFile}
          onChange={(e) => changeHandler(e) } type="file" name="regionFile" id="regionFile" />
        <label htmlFor="regionPhoto" className='font-semibold'>Region Photo</label>
        <input 
          // value={region.regionPhoto}
          onChange={(e) => changeHandler(e) }  type="file" name="regionPhoto" id="regionPhoto" />
        <button type='submit' className='text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 font-semibold rounded-md hover:shadow-md duration-300'>Input Region</button>
      </form>
      <p className='mt-5 text-gray-700 font-semibold text-lg'>{ notif ? 'Add Region Success' : '' }</p>
    </div>
  )
}

export default RegionForm