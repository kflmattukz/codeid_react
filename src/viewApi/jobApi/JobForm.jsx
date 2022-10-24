import React,{ useState } from 'react'
import jobApi from '../../api/jobApi'

function JobForm({ edit }) {

  const [jobId, setJobId] = useState(edit ? edit.jobId : '')
  const [jobTitle, setJobTitle] = useState(edit ? edit.jobTitle : '')
  const [minSalary, setMinSalary] = useState(edit ? edit.minSalary : '')
  const [maxSalary, setMaxSalary] = useState(edit ? edit.maxSalary : '')
  const [notif, setNotif] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (edit) {
      jobApi.updateJob(jobId, {
        jobTitle,
        minSalary: Number(minSalary),
        maxSalary: Number(maxSalary)
      }).then(req => {
        if (req) {
          setNotif(!notif)
        }
      })

    } else {
      jobApi.addJob({
        jobId,
        jobTitle,
        minSalary: Number(minSalary),
        maxSalary: Number(maxSalary)
      }).then(req => {
        if (req) {
          setNotif(!notif)
        }
      })
    }
  }

  if(notif) {
    setTimeout(() => {
      setNotif(!notif)
    },2000)
  }


  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === 'jobId') return setJobId(e.target.value)
    if (e.target.name === 'jobTitle') return setJobTitle(e.target.value)
    if (e.target.name === 'minSalary') return setMinSalary(e.target.value)
    if (e.target.name === 'maxSalary') return setMaxSalary(e.target.value)
  }

  return (
    <form className='mt-5 flex flex-col w-3/5 gap-3 text-gray-700' onSubmit={(e) => handleSubmit(e)}>
      { edit ? 
        <>
          <label htmlFor="jobId">job ID</label>
          <input
            value={ jobId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="jobId" id="jobId" 
            disabled={true}
            />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            value={ jobTitle }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="jobTitle" id="jobTitle" 
            placeholder='ex. Programmer'
            />
          <label htmlFor="minSalary">Min Salary</label>
          <input
            value={ minSalary }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="minSalary" id="minSalary" 
            placeholder='ex. 4000'
            />
          <label htmlFor="maxSalary">Max Salary</label>
          <input
            value={ maxSalary }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="maxSalary" id="maxSalary" 
            placeholder='ex. 9000'
            />
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update Job</button>
        </> : 
        <>
          <label htmlFor="jobId">job ID</label>
          <input
            value={ jobId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="jobId" id="jobId" 
            />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            value={ jobTitle }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="jobTitle" id="jobTitle" 
            placeholder='ex. Programmer'
            />
          <label htmlFor="minSalary">Min Salary</label>
          <input
            value={ minSalary }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="minSalary" id="minSalary" 
            placeholder='ex. 4000'
            />
          <label htmlFor="maxSalary">Max Salary</label>
          <input
            value={ maxSalary }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="maxSalary" id="maxSalary" 
            placeholder='ex. 9000'
            />
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Add Job</button>
        </>
      }

      <p>{ notif ? edit ? 'Update Job Success': 'Add Job Success !' : '' }</p>
    </form>
  )
}

export default JobForm