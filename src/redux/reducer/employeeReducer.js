import { GET_EMPLOYEES, ADD_EMPLOYEE, INC_SALARY, DEC_SALARY } from "../constant/employeeConstant";

const listOfEmployee = [
    { empId: 1, fullname: 'Naufal', salary: 4500 },
    { empId: 2, fullname: 'Firdaus', salary: 5500 },
    { empId: 3, fullname: 'Ahmad', salary: 3500 }
]

const INIT_STATE = {
    employees: [...listOfEmployee],
    totalSalary : listOfEmployee.reduce((sum,acc)=> sum + acc.salary,0)
}

const employeeReducer = (state = INIT_STATE, action) =>{
    console.log(action.type)
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state}
        case ADD_EMPLOYEE:
            return addEmployee(state,action)
        case INC_SALARY:
            return incrementSalary(state, action)
        case DEC_SALARY:
            return decrementSalary(state, action)
        default:
            return state
    }
}

const addEmployee = (state, action) => {
    console.log(state.employees)
    state.employees = [...state.employees, action.payload]
    console.log(state.employees)
    return {...state}
}

const incrementSalary = (state, action) => {
  const {payload} = action
  state.employees = state.employees.map(emp => {
    if (emp.empId !== payload.id) return emp
    emp.salary += 500
    return emp
  })
  return {...state};
}

const decrementSalary = (state, action) => {
  const {payload} = action
  state.employees = state.employees.map(emp => {
    if (emp.empId !== payload.id) return emp
    emp.salary -= 500
    return emp
  })
  return {...state};
}

export default employeeReducer