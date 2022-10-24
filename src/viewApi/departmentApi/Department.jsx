import React, { useState } from 'react'
import DepartmentList from './DepartmentList'
import DepartmentForm from './DepartmentForm'
function Department() {

  const [showForm, setShowForm] = useState(false)

  return (
    <div className='w-4/5 mx-auto'>
      <button 
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
        onClick={ () => setShowForm(!showForm) }
      >
        { showForm ? 'List Departments' : 'Add Department'}
      </button>
      { showForm ? <DepartmentForm /> : <DepartmentList /> }
    </div>
  )
}

export default Department