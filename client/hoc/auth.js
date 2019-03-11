import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

// store
import store from '@/store'

export const AuthRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={routerProps => {
      if (store.getState().auth.user) {
        return <Component {...routerProps} />
      } else {
        return <Redirect to={'/auth/login'} />
      }
    }}
  />
)

AuthRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string
}

export const PublicRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={routerProps => {
      if (!store.getState().auth.user) {
        return <Component {...routerProps} />
      } else {
        return <Redirect to={'/'} />
      }
    }}
  />
)

PublicRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string
}
