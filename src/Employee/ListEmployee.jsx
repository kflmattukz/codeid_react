import React from 'react'

function ListEmployee(props) {
  const {empId, fullname, salary} = props.emp
  
  const tambah = (id) => {
    props.tambahgaji(id)
  }

  const kurang = (id) => {
    props.kuranggaji(id)
  }
  return (
    <div key={empId}>
        <li>Employee Id: {empId}</li>
        <li>Fullname : {fullname}</li>
        <li>Salary : {salary}</li>
        <button onClick={() => tambah(empId)}>Tambah Gaji</button>&nbsp;
        <button onClick={() => kurang(empId)}>kurang Gaji</button>
    </div>
  )
}

export default ListEmployee