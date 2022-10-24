import React, { useEffect, useState } from 'react'
import departmentApi from '../../api/departmentApi'

function DepartmentList() {

  const [departments, setDepartments] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await departmentApi.getAll()
      setDepartments(result)
    }
    fetchData()
  },[])

  const handleEdit = (id) => {

  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete department with id ' + id)) {
      departmentApi.deleteDepartment(id).then(req => {
        if (req) {
          setDepartments(prevDepartments => prevDepartments.filter(department => department.departmentId !== id))
        }
      })
    }
  }

  return (
    <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
      <thead>
        <tr>
          <th className='border'>ID</th>
          <th className='border'>Department Name</th>
          <th className='border'>Manager</th>
          <th className='border'>Location</th>
          <th className='border'>Action</th>
        </tr>
      </thead>
      <tbody>
        { departments?.map(department => {
          return(
            <tr key={ department?.departmentId }>
              <td className='border text-center'>{ department?.departmentId }</td>
              <td className='border pl-1'>{ department?.departmentName }</td>
              <td className='border pl-1'>{ department?.manager?.firstName } { department?.manager?.lastName }</td>
              <td className='border pl-1'>{ department?.location?.streetAddress }</td>
              <td className='border flex justify-around'>
                <button
                  onClick={() => handleDelete(department.deparmentId) }
                  className='rounded border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                >Delete</button>
                <button
                  onClick={ () => handleEdit(department) }
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

export default DepartmentList