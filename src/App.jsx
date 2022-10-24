// import Employee from "./Employee/Employee"
// import Employee from "./EmployeeRedux/Employee"
// import Employee from "./EmployeeReduxToolkit/Employee"
import Region from "./viewApi/RegionApi/Region"
import Country from "./viewApi/countryApi/Country"
import Location from './viewApi/locationApi/Location'
import Department from "./viewApi/departmentApi/Department"

function App() {
  return (
    <div className='w-full h-full pb-20 bg-gray-100'>
      <h1 className="text-3xl font-thin text-gray-700 text-center pt-5">Region</h1>
      {/* <Employee /> */}
      {/* <Region /> */}
      {/* <Location /> */}
      <Department/>
    </div>
  )
}

export default App
