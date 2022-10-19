import React from 'react'

function ListEmployee(props) {
  const {employees, handleIncSalary, handleDecSalary} = props;

  return (
    <table className='mt-5 w-full table-auto border'>
      <thead className='border text-center'>
        <tr className='text-gray-800'>
          <th className='border'>ID</th>
          <th className='border'>Full Name</th>
          <th className='border'>Salary</th>
          <th className='border'>Action</th>
        </tr>
      </thead>
      <tbody>
        { employees.map(emp => {
          return (
            <tr key={emp.empId} className='text-center text-gray-700'>
              <td className='border'>{emp.empId}</td>
              <td className='border'>{emp.fullname}</td>
              <td className='border'>{emp.salary}</td>
              <td className='border flex justify-around'>
                <button 
                  className='py-1 px-3 m-1 bg-blue-500 hover:bg-blue-600 rounded-sm text-white font-semibold'
                  onClick={() => handleIncSalary(emp.empId)}
                >
                  Tambah Gaji
                </button>
                <button 
                  className='py-1 px-3 m-1 bg-purple-500 hover:bg-purple-600 rounded-sm text-white font-semibold'
                  onClick={() => handleDecSalary(emp.empId)}
                >
                  Kurang Gaji
                </button>
              </td>
            </tr>
          )
        }) }
      </tbody>
    </table>
  )
}

export default ListEmployee