import auth from './auth'
import channel from './channel'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth,
  channel
})

export default rootReducer
