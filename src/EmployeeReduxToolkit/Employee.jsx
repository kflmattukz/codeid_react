import React, { useState } from 'react'
import FromInput from './FromInput';
import ListEmployee from './ListEmployee';

function Employee() {

  // const listEmployees = [
  //   {
  //     empId: 1,
  //     fullname: 'Sul',
  //     salary: 5500
  //   },
  //   {
  //     empId: 2,
  //     fullname: 'kifli',
  //     salary: 4500
  //   },
  //   {
  //     empId: 3,
  //     fullname: 'Asmunandar',
  //     salary: 5200
  //   },
  // ]
  // const [employees, setEmployees] = useState([...listEmployees])

  // const [totalgaji, setTotalgaji] = useState()
  // const [showForm, setShowForm] = useState(false)
  // const [notif ,setNotif] = useState(false)
  
  // useEffect(() => {
  //   setTotalgaji(employees.reduce((sum, acc) => sum + acc.salary, 0))
  // },[employees])

  // const addEmployee = (emp) => {
  //   setEmployees(currEmployee => [...currEmployee, emp])
  //   setNotif(!notif)
  // }

  // if (notif) {
  //   setTimeout(() => {
  //     setNotif(!notif)
  //   },3000)
  // }

  // const tambahGaji = (id) => {
  //   const updateEmployee = employees.map(emp => {
  //     if (emp.empId === id) {
  //       emp.salary  = emp.salary + 500
  //     }
  //     return emp
  //   })
    
  //   setEmployees(updateEmployee)
  // }

  // const kurangGaji = (id) => {
  //   const updateEmployee = employees.map(emp => {
  //     if (emp.empId === id) {
  //       if (emp.salary <= 0) {
  //         emp.salary = 0
  //       } else {
  //         emp.salary  = emp.salary - 500
  //       }
  //     }
  //     return emp
  //   })
  //   setEmployees(updateEmployee)
  // }

  // const showEmployeeTable = () => {
  //   return (  
  //     <table className="w-3/5 mx-auto table-auto border">
  //       <thead className='border text-center'>
  //         <tr className='text-gray-800'>
  //           <th className='border'>ID</th>
  //           <th className='border'>Full Name</th>
  //           <th className='border'>Salary</th>
  //           <th className='border w-2/6'>Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //       { employees.map(emp => {
  //         return (
  //           <tr key={emp.empId} className='text-center text-gray-700'>
  //             <td className='border'>{emp.empId}</td>
  //             <td className='border text-left p-1 ml-2'>{emp.fullname}</td>
  //             <td className='border'>{emp.salary}</td>
  //             <td className='border flex justify-around items-center p-1'>
  //               <button 
  //                 className='bg-gray-700 rounded-sm px-3 text-sm text-white font-semibold'
  //                 onClick={() => tambahGaji(emp.empId)}
  //               >Tambah</button>&nbsp;
  //               <button 
  //                 className='bg-gray-700 rounded-sm px-3 text-sm text-white font-semibold'
  //                 onClick={() => kurangGaji(emp.empId)}
  //               >kurang</button>
  //             </td>
  //           </tr>
  //         )
  //       })}
  //       </tbody>
  //     </table>
  //   )
  // }
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='w-3/5 mx-auto mt-5'>
      <button
        className='py-2 px-3 rounded-sm shadow-md bg-green-600 hover:bg-green-700 focus:outline-none font-semibold text-gray-50'
        onClick={() => setShowForm(!showForm)}
      >
        { showForm ? 'List Employee' : 'Add Employee' }
      </button>
      { showForm ? <FromInput/> : <ListEmployee /> }
    </div>
  )
}

// const mapStateToProps = state => ({
//   employees: state.todoReducer.employees
// })
// export default connect(mapStateToProps)(Employee);

export default Employee