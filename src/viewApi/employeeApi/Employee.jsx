import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'

function Employee() {

  const [showForm, setShowForm] = useState(false)
  const [employeeDetails, setEmployeeDetails] = useState({})
  const [employeeEdit, setEmployeeEdit] = useState({})

  return (
    <div className='w-4/5 mx-auto mt-5'>
      <button 
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
        onClick={ () => {setEmployeeEdit({}) ,setShowForm(!showForm)} }
      >
        { showForm ? 'List Employees' : 'Add Employee'}
      </button>
      { showForm ? employeeEdit.jobId ? <EmployeeForm edit={employeeEdit} /> : <EmployeeForm/> : <EmployeeList editEmployee={setEmployeeEdit} editForm={setShowForm} /> }
    </div>
  )
}

export default Employee