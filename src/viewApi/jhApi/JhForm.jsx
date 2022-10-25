import React, { useState, useEffect } from 'react'
import employeeApi from '../../api/employeeApi'
import jobApi from '../../api/jobApi'
import departmentApi from '../../api/departmentApi'

function JhForm({ edit }) {

  const [employees, setEmployees] = useState([])
  const [jobs, setJobs] = useState([])
  const [departments, setDepartments] = useState([])
  const [employeeId, setEmployeeId] = useState(edit ? edit.employeeId : '')
  const [jobId, setJobId] = useState(edit ? edit.jobId : '')
  const [departmentId, setDepartmentId] = useState(edit ? edit.departmentId : '')
  const [startDate, setStartDate] = useState(edit ? edit.startDate : '')
  const [endDate, setEndDate] = useState(edit ? edit.endDate :  '')
  const [notif, setNotif] = useState(false)

  useEffect(() => {
    employeeApi.getAll().then(data => setEmployees(data))
    jobApi.getAll().then(data => setJobs(data))
    departmentApi.getAll().then(data => setDepartments(data))
  }, [])

  if (notif) {
    setTimeout(() => {
      setNotif(!notif)
    }, 2000)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    if (e.target.name === 'employeeId') return setEmployeeId(e.target.value)
    if (e.target.name === 'jobId') return setJobId(e.target.value)
    if (e.target.name === 'departmentId') return setDepartmentId(e.target.value)
    if (e.target.name === 'startDate') return setStartDate(e.target.value)
    if (e.target.name === 'endData') return setEndDate(e.target.value)
  }

  return (
    <form className='mt-5 flex flex-col w-3/5 gap-3 text-gray-700' onSubmit={(e) => handleSubmit(e)}>
      { edit ? 
        <>
          <label htmlFor="employeeId">Employee</label>
          <select value={ employeeId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="employeeId" id="employeeId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Employee -- </option>
            { employees?.map((employee) => {
              return (
                <option key={employee.employeeId} value={ employee.employeeId }>{employee.firstName} { employee.lastName }</option>
              )
            }) }
          </select>
          <label htmlFor="jobId">Job</label>
          <select value={ jobId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="jobId" id="jobId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Job -- </option>
            { jobs?.map((job) => {
              return (
                <option key={job.jobId} value={ job.jobId }>{job.jobTitle}</option>
              )
            }) }
          </select>
          <label htmlFor="departmentId">Department</label>
          <select value={ departmentId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="departmentId" id="departmentId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Department -- </option>
            { departments?.map((department) => {
              return (
                <option key={department.departmentId} value={ department.departmentId }>{department.departmentName}</option>
              )
            }) }
          </select>
          <label htmlFor="startDate">Start Date</label>
          <input
            value={ startDate }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="date" name="startDate" id="startDate" 
            // placeholder='ex. Accounting'
            />
            <label htmlFor="endDate">End Date</label>
          <input
            value={ endDate }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="date" name="endDate" id="endDate" 
            // placeholder='ex. Accounting'
            />
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update Job History</button>
        </> : 
        <>
          <label htmlFor="employeeId">Employee</label>
          <select value={ employeeId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="employeeId" id="employeeId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Employee -- </option>
            { employees?.map((employee) => {
              return (
                <option key={employee.employeeId} value={ employee.employeeId }>{employee.firstName} { employee.lastName }</option>
              )
            }) }
          </select>
          <label htmlFor="jobId">Job</label>
          <select value={ jobId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="jobId" id="jobId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Job -- </option>
            { jobs?.map((job) => {
              return (
                <option key={job.jobId} value={ job.jobId }>{job.jobTitle}</option>
              )
            }) }
          </select>
          <label htmlFor="departmentId">Department</label>
          <select value={ departmentId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="departmentId" id="departmentId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Department -- </option>
            { departments?.map((department) => {
              return (
                <option key={department.departmentId} value={ department.departmentId }>{department.departmentName}</option>
              )
            }) }
          </select>
          <label htmlFor="startDate">Start Date</label>
          <input
            value={ startDate }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="date" name="startDate" id="startDate" 
            // placeholder='ex. Accounting'
            />
            <label htmlFor="endDate">End Date</label>
          <input
            value={ endDate }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="date" name="endDate" id="endDate" 
            // placeholder='ex. Accounting'
            />
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update Job History</button>
        </>
      }

      <p>{ notif ? edit ? 'Update Job Success': 'Add Job Success !' : '' }</p>
    </form>
  )
}

export default JhForm