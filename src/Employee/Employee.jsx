import React, { useEffect, useState } from 'react'
// import ListEmployee from './ListEmployee'
import FromInput from './FromInput';

function Employee() {
  const listEmployees = [
    {
      empId: 1,
      fullname: 'Sul',
      salary: 5500
    },
    {
      empId: 2,
      fullname: 'kifli',
      salary: 4500
    },
    {
      empId: 3,
      fullname: 'Asmunandar',
      salary: 5200
    },
  ]
  const [employees, setEmployees] = useState([...listEmployees])

  const [totalgaji, setTotalgaji] = useState()
  const [showForm, setShowForm] = useState(false)
  const [notif ,setNotif] = useState(false)
  
  useEffect(() => {
    setTotalgaji(employees.reduce((sum, acc) => sum + acc.salary, 0))
  },[employees])

  const addEmployee = (emp) => {
    setEmployees(currEmployee => [...currEmployee, emp])
    setNotif(!notif)
  }

  if (notif) {
    setTimeout(() => {
      setNotif(!notif)
    },3000)
  }

  const tambahGaji = (id) => {
    const updateEmployee = employees.map(emp => {
      if (emp.empId === id) {
        emp.salary  = emp.salary + 500
      }
      return emp
    })
    
    setEmployees(updateEmployee)
  }

  const kurangGaji = (id) => {
    const updateEmployee = employees.map(emp => {
      if (emp.empId === id) {
        if (emp.salary <= 0) {
          emp.salary = 0
        } else {
          emp.salary  = emp.salary - 500
        }
      }
      return emp
    })
    setEmployees(updateEmployee)
  }

  // const showEmployee = employees.map((emp) => {
  //   return(
  //     <dir key={emp.empId}>
  //       <ListEmployee emp={emp} tambahgaji={tambahGaji} kuranggaji={kurangGaji}  />
  //       <br/>
  //     </dir>
  //   )
  // })

  const showEmployeeTable = () => {
    return (  
      <table className="w-3/5 mx-auto table-auto border">
        <thead className='border text-center'>
          <tr className='text-gray-800'>
            <th className='border'>ID</th>
            <th className='border'>Full Name</th>
            <th className='border'>Salary</th>
            <th className='border w-2/6'>Action</th>
          </tr>
        </thead>
        <tbody>
        { employees.map(emp => {
          return (
            <tr key={emp.empId} className='text-center text-gray-700'>
              <td className='border'>{emp.empId}</td>
              <td className='border text-left p-1 ml-2'>{emp.fullname}</td>
              <td className='border'>{emp.salary}</td>
              <td className='border flex justify-around items-center p-1'>
                <button 
                  className='bg-gray-700 rounded-sm px-3 text-sm text-white font-semibold'
                  onClick={() => tambahGaji(emp.empId)}
                >Tambah</button>&nbsp;
                <button 
                  className='bg-gray-700 rounded-sm px-3 text-sm text-white font-semibold'
                  onClick={() => kurangGaji(emp.empId)}
                >kurang</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }

  return (
    <div className='w-full p-10 mx-auto'>
      <div className='w-3/5 mx-auto'>
        <button 
          onClick={() => setShowForm(!showForm)}
          className='p-2 my-2 bg-blue-600 rounded text-white font-semibold focus:outline-none hover:ring focus:ring ring-blue-400'
        >{ showForm ? 'List Employee' : 'Add Employee' }</button>
      </div>
      { showForm ? <FromInput onSubmit={addEmployee} /> : showEmployeeTable() }
      <div className='w-3/5 mx-auto my-2 font-bold text-gray-700'>
        { showForm ? '' : <p>Total Salary: {totalgaji}</p> }
      </div>
      <div className='w-3/5 mx-auto'>
      { showForm ? notif ? <p className='font-semibold text-gray-700'>Add employee Success</p> : '' : ''}
      </div>
    </div>
  )
}

export default Employee