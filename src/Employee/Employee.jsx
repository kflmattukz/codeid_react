import React, { useState, useEffect } from 'react'
import FromInput from './FromInput';
import ListEmployee from './ListEmployee';

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

  const incrementSalary = (id) => {
    const updateEmployee = employees.map(emp => {
      if (emp.empId === id) {
        emp.salary  = emp.salary + 500
      }
      return emp
    })
    
    setEmployees(updateEmployee)
  }

  const decrementSalary = (id) => {
    const updateEmployee = employees.map(emp => {
      if (emp.empId === id) {
        if (emp.salary <= 0) {
          emp.salary = 0
        } else {
          emp.salary = emp.salary - 500
        }
      }
      return emp
    })
    setEmployees(updateEmployee)
  }
  
  return (
    <div className='w-3/5 mx-auto mt-5'>
      <button
        className='py-2 px-3 rounded-sm shadow-md bg-green-600 hover:bg-green-700 focus:outline-none font-semibold text-gray-50'
        onClick={() => setShowForm(!showForm)}
      >
        { showForm ? 'List Employee' : 'Add Employee' }
      </button>
      { showForm ? <FromInput handleAddEmployee={addEmployee}/> : <ListEmployee employees={employees} handleIncSalary={incrementSalary} handleDecSalary={decrementSalary} /> }
    </div>
  )
}

export default Employee