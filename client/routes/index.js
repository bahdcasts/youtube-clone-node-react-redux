import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// components

// hoc
import { AuthRoute, PublicRoute } from '@/hoc/auth'

// containers
import LoginContainer from '@/containers/LoginContainer'
import NavbarContainer from '@/containers/NavbarContainer'
import ChannelContainer from '@/containers/ChannelContainer'
import RegisterContainer from '@/containers/RegisterContainer'

const Router = () => (
  <BrowserRouter>
    <>
      <NavbarContainer />
      <AuthRoute path={'/channel'} component={ChannelContainer} />
      <PublicRoute path={'/auth/login'} component={LoginContainer} />
      <PublicRoute path={'/auth/register'} component={RegisterContainer} />
    </>
  </BrowserRouter>
)

export default Router
