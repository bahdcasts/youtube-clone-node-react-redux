import React from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// components
import Register from '@/components/Register'

// actions
import { postRegister, setAuth } from '@/store/actions'

class RegisterContainer extends React.Component {
  /**
   * Component state
   *
   * @var {Object}
   */
  state = {
    initialValues: {
      name: '',
      email: '',
      password: ''
    }
  }

  /**
   * The proptypes for this component
   *
   * @var {Object}
   */
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  /**
   * The registration validation schema
   *
   * @var {Object}
   */
  RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(6)
      .max(12)
  })

  /**
   * Handle submit of registration form
   *
   * @param {Object} values registration form data
   * @param {Object} methods Methods from formik to manage form
   * @return null
   */
  onSubmit = (values, { setErrors }) => {
    const { dispatch } = this.props
    dispatch(postRegister(values))
      .then(response => {
        localStorage.setItem('auth', JSON.stringify(response.payload.data))

        dispatch(setAuth(response.payload.data))
      })
      .catch(error => {
        setErrors(error.error.response.data)
      })
  }

  /**
   * Render the template for this component
   *
   * @return {JSX}
   */
  render() {
    return (
      <Register
        onSubmit={this.onSubmit}
        RegisterSchema={this.RegisterSchema}
        initialValues={this.state.initialValues}
      />
    )
  }
}

export default connect()(RegisterContainer)
