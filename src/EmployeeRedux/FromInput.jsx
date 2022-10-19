import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doAddEmployee } from '../redux/action/employeeAction'

function FromInput() {

  const dispatch = useDispatch()
  const [fullname, setFullname] = useState('')
  const [salary, setSalary] = useState(0)
  const [notif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(doAddEmployee({
      empId: Math.floor(Math.random() * 1000),
      fullname,
      salary,
    }))
    setShowNotif(!notif);
    setFullname('')
    setSalary(0)
  }

  if (notif) {
    setTimeout(() => {
      setShowNotif(!notif)
    },1000)
  }

  const handleChange = (e, name) => {
    if(name === 'fullname') {
      setFullname(e.target.value)
    } else {
      setSalary(parseInt(e.target.value))
    }
    
  }


  return (
    <div className='w-full mx-auto mt-5'>
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
      { notif ? <p className='text-gray-700 font-semibold font-lg'>Add Employee Success</p> : '' }
    </div>
  )
}

export default FromInput