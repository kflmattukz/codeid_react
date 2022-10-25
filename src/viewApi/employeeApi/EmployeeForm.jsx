import React,{ useState, useEffect } from 'react'
import jobApi from '../../api/jobApi'
import employeeApi from '../../api/employeeApi'
import departmentApi from '../../api/departmentApi'

function EmployeeForm({ edit }) {

  const [employeeId, setEmployeeId] = useState(edit ? edit.employeeId : '')
  const [firstName, setFirstName] = useState(edit ? edit.firstName : '')
  const [lastName, setLastName] = useState(edit ? edit.lastName : '')
  const [email, setEmail] = useState(edit ? edit.email : '')
  const [phoneNumber, setPhoneNumber] = useState(edit ? edit.phoneNumber : '')
  const [hireDate, setHireDate] = useState(edit ? edit.hireDate : '')
  const [salary, setSalary] = useState(edit ? edit.salary : '')
  const [commissionPct, setCommissionPct] = useState(edit ? edit.commissionPct : null)
  const [xempId, setXempId] = useState(edit ? edit.xempId : null)
  const [managerId, setManagerId] = useState(edit ? edit.managerId : null)
  const [jobId, setJobId] = useState(edit ? edit.jobId : '')
  const [departmentId, setDepartmentId] = useState(edit ? edit.departmentId : '')
  const [notif, setNotif] = useState(false)

  const [jobs, setJobs] = useState([])
  const [managers, setManagers] = useState([])
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    jobApi.getAll().then(data => setJobs(data))
    employeeApi.getAll().then(data => setManagers(data))
    departmentApi.getAll().then(data => setDepartments(data))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (edit) {
      employeeApi.updateEmployee(Number(employeeId), {
        firstName,
        lastName,
        email,
        phoneNumber,
        hireDate,
        salary: Number(salary),
        commissionPct,
        xempId,
        managerId: Number(managerId),
        jobId,
        departmentId: Number(departmentId)
      }).then(req => {
        if (req) {
          setNotif(!notif)
        }
      })
    } else {
      employeeApi.addEmployee({
        firstName,
        lastName,
        email,
        phoneNumber,
        hireDate,
        salary: Number(salary),
        commissionPct,
        xempId,
        managerId: Number(managerId),
        jobId,
        departmentId: Number(departmentId)
      }).then(req => {
        if (req) {
          setNotif(!notif)
        }
      })
    }
  }

  if(notif) {
    setTimeout(() => {
      setNotif(!notif)
    },2000)
  }


  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === 'firstName') return setFirstName(e.target.value)
    if (e.target.name === 'lastName') return setLastName(e.target.value)
    if (e.target.name === 'email') return setEmail(e.target.value)
    if (e.target.name === 'phoneNumber') return setPhoneNumber(e.target.value)
    if (e.target.name === 'hireDate') return setHireDate(e.target.value)
    if (e.target.name === 'salary') return setSalary(e.target.value)
    if (e.target.name === 'commissionPct') return setCommissionPct(e.target.value)
    if (e.target.name === 'xempId') return setXempId(e.target.value)
    if (e.target.name === 'jobId') return setJobId(e.target.value)
    if (e.target.name === 'managerId') return setManagerId(e.target.value)
    if (e.target.name === 'departmentId') return setDepartmentId(e.target.value)
  }

  return (
    <form className='mt-5 flex flex-col w-3/5 gap-1 text-gray-700' onSubmit={(e) => handleSubmit(e)}>
      { edit ? 
        <>
          <label htmlFor="employeeId">Employee Id</label>
          <input
            value={ employeeId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="employeeId" id="employeeId"
            disabled={true}
            />
          <label htmlFor="firstName">First Name</label>
          <input
            value={ firstName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="firstName" id="firstName" 
            />
          <label htmlFor="lastName">Last Name</label>
          <input
            value={ lastName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="lastName" id="lastName" 
            // placeholder='ex. Programmer'
            />
          <label htmlFor="email">Email</label>
          <input
            value={ email }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="email" id="email" 
            // placeholder='ex. 4000'
            />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={ phoneNumber }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="phoneNumber" id="phoneNumber" 
            // placeholder='ex. 9000'
            />
          <label htmlFor="hireDate">Hire Date</label>
          <input
            value={ hireDate }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="date" name="hireDate" id="hireDate" 
            // placeholder='ex. 9000'
            />
          <label htmlFor="salary">Salary</label>
          <input
            value={ salary }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="salary" id="salary" 
            placeholder='ex. 9000'
            />
          <label htmlFor="commissionPct">Commission Pct (optional)</label>
          <input
            value={ commissionPct }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="commissionPct" id="commissionPct" 
            // placeholder='ex. 9000'
            />
          <label htmlFor="xempId">Xemp Id</label>
          <input
            value={ xempId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="xempId" id="xempId" 
            placeholder='ex. 9000'
            />
          <label htmlFor="jobId">Job</label>
          <select value={ jobId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="jobId" id="jobId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Job -- </option>
            { jobs?.map((job) => {
              return (
                <option key={job.jobId} value={ job.jobId }>{job.jobTitle}</option>
              )
            }) }
          </select>
          <label htmlFor="managerId">Manager</label>
          <select value={ managerId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="managerId" id="managerId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Manager -- </option>
            { managers?.map((manager) => {
              return (
                <option key={manager.employeeId} value={ manager.employeeId }>{manager.firstName} { manager.lastName }</option>
              )
            }) }
          </select>
          <label htmlFor="departmentId">Department</label>
          <select value={ departmentId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="departmentId" id="departmentId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Department -- </option>
            { departments?.map((department) => {
              return (
                <option key={department.deparmentId} value={ department.departmentId }>{department.departmentName}</option>
              )
            }) }
          </select>
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Update Employee</button>
        </> : 
        <>
          <label htmlFor="firstName">First Name</label>
          <input
            value={ firstName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="firstName" id="firstName" 
            />
          <label htmlFor="lastName">Last Name</label>
          <input
            value={ lastName }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="lastName" id="lastName" 
            // placeholder='ex. Programmer'
            />
          <label htmlFor="email">Email</label>
          <input
            value={ email }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="email" id="email" 
            // placeholder='ex. 4000'
            />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={ phoneNumber }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="phoneNumber" id="phoneNumber" 
            // placeholder='ex. 9000'
            />
          <label htmlFor="hireDate">Hire Date</label>
          <input
            value={ hireDate }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="date" name="hireDate" id="hireDate" 
            // placeholder='ex. 9000'
            />
          <label htmlFor="salary">Salary</label>
          <input
            value={ salary }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="salary" id="salary" 
            placeholder='ex. 9000'
            />
          <label htmlFor="commissionPct">Commission Pct (optional)</label>
          <input
            value={ commissionPct }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="commissionPct" id="commissionPct" 
            // placeholder='ex. 9000'
            />
          <label htmlFor="xempId">Xemp Id</label>
          <input
            value={ xempId }
            className='py-2 px-3 outline-none border border-gray-300 rounded shadow-sm' 
            onChange={(e) => handleChange(e)}
            type="text" name="xempId" id="xempId" 
            placeholder='ex. 9000'
            />
          <label htmlFor="jobId">Job</label>
          <select value={ jobId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="jobId" id="jobId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Job -- </option>
            { jobs?.map((job) => {
              return (
                <option key={job.jobId} value={ job.jobId }>{job.jobTitle}</option>
              )
            }) }
          </select>
          <label htmlFor="managerId">Manager</label>
          <select value={ managerId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="managerId" id="managerId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Manager -- </option>
            { managers?.map((manager) => {
              return (
                <option key={manager.employeeId} value={ manager.employeeId }>{manager.firstName} { manager.lastName }</option>
              )
            }) }
          </select>
          <label htmlFor="departmentId">Department</label>
          <select value={ departmentId } className='py-2 px-3 border border-gray-300 rounded shadow-sm outline-none w-full' name="departmentId" id="departmentId" onChange={(e) => handleChange(e)}>
            <option value=""> -- Choose Department -- </option>
            { departments?.map((department) => {
              return (
                <option key={department.deparmentId} value={ department.departmentId }>{department.departmentName}</option>
              )
            }) }
          </select>
          <button className='bg-blue-500 text-white py-1 px-2 rounded' type="submit">Add Employee</button>
        </>
      }

      <p>{ notif ? edit ? 'Update Employee Success': 'Add Employee Success !' : '' }</p>
    </form>
  )
}

export default EmployeeForm