import React, { useState } from 'react'
import DepartmentList from './DepartmentList'
import DepartmentForm from './DepartmentForm'
function Department() {

  const [showForm, setShowForm] = useState(false)
  const [departmentEdit, setDepartmentEdit] = useState({
    departmentId: '',
    departmentName: '',
    managerId: 0,
    locationId: 0
  })

  return (
    <div className='w-4/5 mx-auto mt-5'>
      <button 
        className='py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold outline-none rounded shadow-sm duration-300'
        onClick={ () => {setDepartmentEdit({}) ,setShowForm(!showForm)} }
      >
        { showForm ? 'List Departments' : 'Add Department'}
      </button>
      { showForm ? departmentEdit.departmentId ?  <DepartmentForm edit={departmentEdit} /> : <DepartmentForm /> : <DepartmentList editDepartment={ setDepartmentEdit } editForm={ setShowForm } /> }
    </div>
  )
}

export default Department