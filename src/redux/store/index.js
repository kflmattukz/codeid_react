import {createStore} from 'redux'
import employeeReducer from '../reducer/employeeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore (
    employeeReducer,
    composeWithDevTools()
)

export default store