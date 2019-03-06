import React from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'

// components
import Login from '@/components/Login'

class LoginContainer extends React.Component {
  /**
   * The component state
   *
   * @var {Object}
   */
  state = {
    initialValues: {
      email: '',
      password: ''
    }
  }

  /**
   * The validation schemda for the login form
   *
   * @var {Object}
   */
  LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string().required()
  })

  /**
   * Handle login submit form
   *
   * @return {null}
   */
  onSubmit = console.log

  /**
   * Return the component jsx
   *
   * @return {JSX}
   */
  render() {
    return (
      <Login
        initialValues={this.state.initialValues}
        LoginSchema={this.LoginSchema}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default connect()(LoginContainer)
