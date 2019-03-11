import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// components
import Login from '@/components/Login'

// actions
import { setAuth, postLogin } from '@/store/actions'

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
   * Proptypes for component
   *
   * @var {Object}
   */
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
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
  onSubmit = (values, { setErrors }) => {
    const { history, dispatch } = this.props

    dispatch(postLogin(values))
      .then(response => {
        localStorage.setItem('auth', JSON.stringify(response.payload.data))

        dispatch(setAuth(response.payload.data))

        history.push('/')
      })
      .catch(errors => {
        setErrors(errors.error.response.data)
      })
  }

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
