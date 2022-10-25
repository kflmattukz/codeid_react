import React, { useEffect, useState } from 'react'
import jhApi from '../../api/jhApi'

function JhList({editJh, editForm}) {

  const [jhs, setJhs] = useState([])
  
  useEffect(() => {
    jhApi.getAll().then(data => setJhs(data))
  })

  const handleEdit = jh => {
    editJh({
      employeeId: jh.employee.employeeId,
      jobId: jh.job.jobId,
      departmentId: jh.department.departmentId,
      startDate: jh.startDate,
      endDate: jh.endDate
    })
    editForm(true)
  }

  const handleDelete = (employeeId, jobId) => {
    if(window.confirm('Are you sure to delete Job History with ID ' + employeeId + ' and ' + jobId)) {
      jhApi.deleteJh(employeeId,jobId).then(req => {
        if (req) {
          jhs.filter(jh => jh.job.jobid !== jobId && jh.employee.employeeId !== employeeId)
        }
      })
    }
  }

  return (
    <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
      <thead>
        <tr>
          <th className='border'>No</th>
          <th className='border'>Name</th>
          <th className='border'>Start - End Job Date</th>
          <th className='border'>Job</th>
          <th className='border'>department</th>
        </tr>
      </thead>
      <tbody>
        { jhs?.map((jh,i) => {
          return(
            <tr key={ i }>
              <td className='border pl-2'>{ i + 1 }</td>
              <td className='border pl-1'>{ jh?.employee?.firstName } { jh?.employee?.lastName }</td>
              <td className='border pl-1'>{ jh?.startDate } - { jh?.endDate }</td>
              <td className='border pl-1'>{ jh?.job.jobTitle }</td>
              <td className='border pl-1'>{ jh?.department.departmentName }</td>
              <td className='border flex justify-around'>
                <button
                  onClick={() => handleDelete(jh.employee.employeeId, jh.job.jobId) }
                  className='rounded border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                >Delete</button>
                <button
                  onClick={ () => handleEdit(jh) }
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

export default JhList