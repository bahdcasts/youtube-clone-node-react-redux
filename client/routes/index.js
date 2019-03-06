import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Navbar from '@/components/Navbar'

// containers
import LoginContainer from '@/containers/LoginContainer'
import RegisterContainer from '@/containers/RegisterContainer'

const Router = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Route path={'/auth/login'} component={LoginContainer} />
      <Route path={'/auth/register'} component={RegisterContainer} />
    </>
  </BrowserRouter>
)

export default Router
