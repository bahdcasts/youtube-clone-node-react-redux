import React from 'react'
import ReactDOM from 'react-dom'

import Router from '@/routes'

const element = document.getElementById('app')

if (element) {
  ReactDOM.render(<Router />, element)
}
