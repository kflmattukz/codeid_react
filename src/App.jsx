import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import Region from "./viewApi/RegionApi/Region"
import Country from "./viewApi/countryApi/Country"
import Location from './viewApi/locationApi/Location'
import Department from "./viewApi/departmentApi/Department"
import Job from "./viewApi/jobApi/Job"
import Employee from "./viewApi/employeeApi/Employee"
import Jh from "./viewApi/jhApi/Jh"
import EmployeeDetails from './viewApi/employeeApi/EmployeeDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } >
          <Route path='region' element={<Region />} />
          <Route path='country' element={<Country />} />
          <Route path='location' element={<Location />} />
          <Route path='department' element={<Department />} />
          <Route path='job' element={<Job />} />
          <Route path='employee' element={<Employee />} />
          <Route path='employee/:employeeId' element={<EmployeeDetails />} />
          <Route path='jobhistory' element={<Jh />} />
        </Route>
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
