import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// components
import NavbarContainer from '@/containers/NavbarContainer'

// hoc
import { AuthRoute, PublicRoute } from '@/hoc/auth'

// containers
import LoginContainer from '@/containers/LoginContainer'
import RegisterContainer from '@/containers/RegisterContainer'

const Router = () => (
  <BrowserRouter>
    <>
      <NavbarContainer />
      <PublicRoute path={'/auth/login'} component={LoginContainer} />
      <PublicRoute path={'/auth/register'} component={RegisterContainer} />
    </>
  </BrowserRouter>
)

export default Router
