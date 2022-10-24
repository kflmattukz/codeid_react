import React, { useEffect, useState } from 'react'
import jobApi from '../../api/jobApi'

function JobList({ editJob, editForm }) {

  const [jobs, setJobs] = useState()

  useEffect(() => {
    jobApi.getAll().then(data => setJobs(data))
  }, [])

  const handleEdit = job => {
    editJob({
      jobId: job.jobId,
      jobTitle: job.jobTitle,
      minSalary: job.minSalary,
      maxSalary: job.maxSalary
    })
    editForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete Job with id ' + id)) {
      jobApi.deleteJob(id).then(req => {
        if (req) {
          setJobs(prevJobs => prevJobs.filter(job => job.jobId !== id))
        }
      })
    }
  }

  return(
  <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
      <thead>
        <tr>
          <th className='border'>ID</th>
          <th className='border'>Job Title</th>
          <th className='border'>Min - Max Salary</th>
          <th className='border'>Action</th>
        </tr>
      </thead>
      <tbody>
        { jobs?.map(job => {
          return(
            <tr key={ job?.jobId }>
              <td className='border pl-2'>{ job?.jobId }</td>
              <td className='border pl-1'>{ job?.jobTitle }</td>
              <td className='border pl-1'>{ job?.minSalary } - { job?.maxSalary }</td>
              <td className='border flex justify-around'>
                <button
                  onClick={() => handleDelete(job.jobId) }
                  className='rounded border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                >Delete</button>
                <button
                  onClick={ () => handleEdit(job) }
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

export default JobList