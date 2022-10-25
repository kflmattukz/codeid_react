import React, { useEffect, useState } from 'react'
import EmployeeDetails from './EmployeeDetails'
import employeeApi from '../../api/employeeApi'

function EmployeeList({ editEmployee, editForm }) {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    employeeApi.getAll().then(data => setEmployees(data))
  }, [])

  const handleEdit = employee => {
    editEmployee({
      employeeId: employee.employeeId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      hireDate: employee.hireDate,
      salary: employee.salary,
      commissionPct: employee.commissionPct,
      xempId: employee.xempId,
      jobId: employee.job ? employee.job.jobId : '',
      managerId: employee.manager ? employee.manager.employeeId : '',
      departmentId: employee.department ? employee.department.departmentId : ''
    })
    editForm(true)
  }

  const handleDetails = employee => {
    
  }

  const handleDelete = (id) => {
    id = Number(id)
    if (window.confirm('Are you sure to delete employee with id ' + id)) {
      employeeApi.deleteEmployee(id).then(req => {
        if (req) {
          setEmployees(prevEmployees => prevEmployees.filter(employee => employee.employeeId !== id))
        }
      })
    }
  }

  return(
  <table className='mt-5 w-full text-gray-700 bg-white rounded-md overflow-hidden shadow-sm'>
      <thead>
        <tr>
          <th className='border'>ID</th>
          <th className='border'>Name</th>
          <th className='border'>Job</th>
          <th className='border'>Department</th>
          <th className='border'>Manager</th>
          <th className='border'>Salary</th>
          <th className='border'>Action</th>
        </tr>
      </thead>
      <tbody>
        { employees?.map(employee => {
          return(
            <tr key={ employee?.employeeId }>
              <td className='border text-center'>{ employee?.employeeId }</td>
              <td className='border pl-1'>{ employee?.firstName } { employee?.lastName } </td>
              <td className='border pl-1'>{ employee?.job?.jobTitle }</td>
              <td className='border pl-1'>{ employee?.department?.departmentName }</td>
              <td className='border pl-1'>{ employee?.manager?.firstName } { employee?.manager?.lastName }</td>
              <td className='border pl-1'>{ employee?.salary }</td>
              <td className='border flex justify-around'>
                <button
                  onClick={() => handleDelete(employee.employeeId) }
                  className='rounded border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2'
                >Delete</button>
                <button
                  onClick={ () => handleEdit(employee) }
                  className='rounded border-none bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-sm py-1 px-2'
                >Edit</button>
                <button
                  onClick={ () => handleDetails(employee) }
                  className='rounded border-none bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-1 px-2'
                >Details</button>
              </td>
            </tr>
          )
        }) }
      </tbody>
    </table>
  )
}

export default EmployeeList