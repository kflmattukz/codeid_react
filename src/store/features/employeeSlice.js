import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {

    addEmployee: (state, action) => {
      state.push(action.payload)
    },

    incrementSalary: (state, action) => {
      state = state.map(emp => {
        if(emp.empId !== action.payload.id) {
          return emp
        }
        emp.salary += 500;
        return emp;
      })
    },

    decrementSalary: (state, action) => {
      state = state.map(emp => {
        if (emp.empId !== action.payload.id) {
          return emp
        }
        emp.salary -= 500;
        return emp;
      })
    }
  }
})

export const { addEmployee, incrementSalary, decrementSalary } = employeeSlice.actions;
export default employeeSlice.reducer;