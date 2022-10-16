import React, { useState } from 'react'

function FromInput({onSubmit}) {

  const [fullname, setFullname] = useState('')
  const [salary, setSalary] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      empId: Math.floor(Math.random() * 1000),
      fullname,
      salary,
    })
    setFullname('')
    setSalary(0)
  }

  const handleChange = (e, name) => {
    if(name === 'fullname') {
      setFullname(e.target.value)
    } else {
      setSalary(parseInt(e.target.value))
    }
    
  }


  return (
    <div className='w-3/5 mx-auto'>
      <form onSubmit={(e) => handleSubmit(e)} className='w-1/2 text-lg text-gray-600 flex flex-col gap-2'>
        <label htmlFor="fullname">Full Name</label>
        <input 
          className='border focus:outline-none rounded-md p-1 pl-2 focus:ring focus:ring-blue-300'
          type="text" 
          name="fullname" 
          value={fullname} 
          id="fullname"
          onChange={(e) => handleChange(e, 'fullname') } 
        />
        <label htmlFor="salary">Salary</label>
        <input 
          className='border focus:outline-none rounded-md p-1 pl-2 focus:ring focus:ring-blue-300'
          type="number"
          name="salary"
          value={parseInt(salary)}
          id="salary"
          onChange={(e) => handleChange(e, 'salary')}
        /><br/>
        <button type="submit" className='py-2 my-2 bg-blue-600 rounded text-base text-white font-semibold focus:outline-none focus:ring ring-blue-400 hover:ring'>Tambah</button>
      </form>
    </div>
  )
}

export default FromInput