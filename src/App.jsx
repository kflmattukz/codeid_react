// import Employee from "./Employee/Employee"
// import Employee from "./EmployeeRedux/Employee"
// import Employee from "./EmployeeReduxToolkit/Employee"
import Region from "./RegionApi/Region"

function App() {
  return (
    <div className='w-full h-full pb-20 bg-gray-100'>
      <h1 className="text-3xl font-thin text-gray-700 text-center pt-5">Region</h1>
      {/* <Employee /> */}
      <Region />
    </div>
  )
}

export default App
