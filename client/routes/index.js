import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Navbar from '@/components/Navbar'

// hoc
import { AuthRoute, PublicRoute } from '@/hoc/auth'

// containers
import LoginContainer from '@/containers/LoginContainer'
import RegisterContainer from '@/containers/RegisterContainer'

const Router = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <PublicRoute path={'/auth/login'} component={LoginContainer} />
      <AuthRoute path={'/auth/register'} component={RegisterContainer} />
    </>
  </BrowserRouter>
)

export default Router
