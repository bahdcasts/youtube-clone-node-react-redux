import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '@/store'
import Router from '@/routes'

const element = document.getElementById('app')

if (element) {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    element
  )
}
