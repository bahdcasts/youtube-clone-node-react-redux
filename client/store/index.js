import Axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const instance = Axios.create({
  baseURL: '/api/'
})

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      axiosMiddleware(instance, {
        returnRejectedPromiseOnError: true
      })
    )
  )
)
