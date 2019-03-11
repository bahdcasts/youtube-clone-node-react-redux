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
        returnRejectedPromiseOnError: true,
        interceptors: {
          request: [
            {
              success: ({ getState }, axiosConfig) => {
                const { token } = getState().auth

                if (token) {
                  axiosConfig.headers = {
                    Authorization: `Bearer ${token.token}`
                  }
                }

                return axiosConfig
              }
            }
          ]
        }
      })
    )
  )
)
