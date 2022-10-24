import React, { useState, useEffect } from 'react'
import locationApi from '../../api/locationApi'
import employeeApi from '../../api/employeeApi'

function DepartmentForm({ edit }) {
  const [locations,setLocations] = useState([])
  const [employees,setEmployees] = useState([])

  useEffect(() => {
    locationApi.getAll().then(data => setLocations(data))
    employeeApi.getAll().then(data => setEmployees(data))
  }, [])

  const [departmentId, setDepartmentId] = useState(edit ? edit.departmentId : '')
  const [departmentName, setDepartmentName] = useState(edit ? edit.departmentName : '')
  const [managerId, setManagerId] = useState(edit ? edit.managerId : '')
  const [locationId, setLocationId] = useState(edit ? edit.locationId : '')
  const [notif, setNotif] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  if(notif) {
    setTimeout(() => {
      setNotif(!notif)
    }, 2000)
  }

  const handleChange = (e) => {
    if(e.target.name === 'departmentName') return setDepartmentName(e.target.value)
    if(e.target.name === 'managerId') return setManagerId(e.target.value)
    if(e.target.name === 'locationId') return setLocationId(e.target.value)
  }

  return (
    <form className='mt-5 flex flex-col w-3/5 gap-3 text-gray-700' onSubmit={(e) => handleSubmit(e)}>
      { edit ? 
        <>
          <label htmlFor="departmentId">Department ID</label>
          <input
            value={ departmentId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="departmentId" id="departmentId" 
            disabled={true}
            />
          <label htmlFor="departmentName">Department Name</label>
          <input
            value={ departmentName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="departmentName" id="departmentName" 
            placeholder='ex. Accounting'
            />
          <label htmlFor="managerId">Manager</label>
          <select value={ managerId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="managerId" id="managerId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Manager -- </option>
            { employees?.map(employee => {
              return (
                <option key={employee.employeeId} value={employee.employeeId}>{employee.firstName} { employee.lastName }</option>
              )
            }) }
          </select>
          <label htmlFor="locationId">Location</label>
          <select value={ locationId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="locationId" id="locationId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Location -- </option>
            { locations?.map(location => {
              return (
                <option key={location.locationId} value={location.locationId}>{location.streetAddress}</option>
              )
            }) }
          </select>
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update Department</button>
        </> : 
        <>
          <label htmlFor="departmentName">Department Name</label>
          <input
            value={ departmentName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="departmentName" id="departmentName" 
            placeholder='ex. Accounting'
            />
          <label htmlFor="managerId">Manager</label>
          <select value={ managerId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="managerId" id="managerId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Manager -- </option>
            { employees?.map(employee => {
              return (
                <option key={employee.employeeId} value={employee.employeeId}>{employee.firstName} { employee.lastName }</option>
              )
            }) }
          </select>
          <label htmlFor="locationId">Location</label>
          <select value={ locationId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="locationId" id="locationId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Location -- </option>
            { locations?.map(location => {
              return (
                <option key={location.locationId} value={location.locationId}>{location.streetAddress}</option>
              )
            }) }
          </select>
          
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Add Department</button>
        </>
      }

      <p>{ notif ? edit ? 'Update department Success': 'Add department Success !' : '' }</p>
    </form>
  )
}

export default DepartmentForm