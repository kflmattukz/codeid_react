// import Employee from "./Employee/Employee"
// import Employee from "./EmployeeRedux/Employee"
// import Employee from "./EmployeeReduxToolkit/Employee"
import Region from "./viewApi/RegionApi/Region"
import Country from "./viewApi/countryApi/Country"
import Location from './viewApi/locationApi/Location'
import Department from "./viewApi/departmentApi/Department"
import Job from "./viewApi/jobApi/Job"
import Employee from "./viewApi/employeeApi/Employee"

function App() {
  return (
    <div className='w-full h-full pb-20 bg-gray-100'>
      <h1 className="text-3xl font-thin text-gray-700 text-center pt-5">Region</h1>
      {/* <Employee /> */}
      {/* <Region /> */}
      {/* <Location /> */}
      {/* <Department/> */}
      {/* <Job/> */}
      <Employee/>
    </div>
  )
}

export default App
