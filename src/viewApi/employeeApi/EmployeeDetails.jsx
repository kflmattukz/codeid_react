import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import employeeApi from '../../api/employeeApi'

function EmployeeDetails() {

  const { employeeId } = useParams()
  const [employee, setEmployee] = useState({})

  useEffect(() => {
    employeeApi.getOne(Number(employeeId)).then(data => setEmployee(data))
  }, [])

  return (
    <div className='w-3/5 mx-auto mt-5'>
      <div className='border border-gray-300 p-5 rounded-md shadow-md text-gray-700'>
        <p>Full Name : {employee?.firstName} {employee?.lastName}</p>
        <p>Email : { employee?.email }</p>
        <p>Phone Number : { employee?.phoneNumber }</p>
        <p>Salary : { employee?.salary }</p>
        <p>Hire Date : {new Date(employee?.hireDate).toDateString()}</p>
        <p>Commission : { employee?.commissionPct === null ? '-' : employee.commissionPct }</p>
        <p>Xemp : { employee?.xempId === null ? '-' : employee?.xempId }</p>
        <p>Manager : { employee?.manager === null ? '-' : employee?.manager?.firstName + ' ' + employee?.manager?.lastName }</p>
        <p>Job : { employee?.job?.jobTitle }</p>
        <p>Department : {employee?.department?.departmentName}</p>

      </div>
      <Link to={'/employee'}>
        <button className='mt-5 bg-blue-600 px-3 py-2 rounded-md shadow-md text-white font-semibold'>
          Back to Employee List
        </button>
      </Link>
    </div>
  )
}

export default EmployeeDetails