import React, { useState } from 'react'
import JobForm from './JobForm'
import JobList from './JobList'

function Job() {

  const [showForm, setShowForm] = useState(false)
  const [jobEdit, setJobEdit] = useState({
    jobId: '',
    jobTitle: '',
    minSalary: '',
    maxSalary: ''
  })

  return (
    <div className='w-4/5 mx-auto'>
      <button 
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
        onClick={ () => {setJobEdit({}) ,setShowForm(!showForm)} }
      >
        { showForm ? 'List Jobs' : 'Add Job'}
      </button>
      { showForm ? jobEdit.jobId ? <JobForm edit={jobEdit} /> : <JobForm/> : <JobList editJob={setJobEdit} editForm={setShowForm} /> }
    </div>
  )
}

export default Job