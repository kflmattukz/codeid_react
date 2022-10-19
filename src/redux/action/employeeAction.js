import * as actionType from '../constant/employeeConstant'

export const doGetEmployees = (payload) => ({
    type: actionType.GET_EMPLOYEES,
    payload
})

export const doAddEmployee = (payload) => ({
    type: actionType.ADD_EMPLOYEE,
    payload
})

export const doIncSalary = (payload) => ({
  type: actionType.INC_SALARY,
  payload
})

export const doDecSalary = (payload) => ({
  type: actionType.DEC_SALARY,
  payload
})