import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Navbar from '../components/Navbar'

// containers
import RegisterContainer from '../containers/RegisterContainer'

const Router = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Route path={'/auth/register'} component={RegisterContainer} />
      <Route
        path={'/about'}
        component={() => <h1>THIS IS THE ABOUT COMPONENT</h1>}
      />
      <Route
        path={'/contact'}
        component={() => <h1>THIS IS THE CONTACT COMPONENT</h1>}
      />
    </>
  </BrowserRouter>
)

export default Router
