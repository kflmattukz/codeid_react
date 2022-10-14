import React, { useState } from 'react'
import ListEmployee from './ListEmployee'
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
        emp.salary  = emp.salary - 500
      }
      return emp
    })
    setEmployees(updateEmployee)
  }

  const showEmployee = employees.map((emp) => {
    return(
      <dir key={emp.empId}>
        <ListEmployee emp={emp} tambahgaji={tambahGaji} kuranggaji={kurangGaji}  />
        <br/>
      </dir>
    )
  })

  return (
    <div>
      { showEmployee }
    </div>
  )
}

export default Employee