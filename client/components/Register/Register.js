import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Register = ({ onSubmit, initialValues, RegisterSchema }) => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header pb-0">
            <h1 className="text-center mt-5">Register</h1>
          </div>

          <div className="card-body">
            <Formik
              onSubmit={onSubmit}
              initialValues={initialValues}
              validationSchema={RegisterSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={classnames('form-control', {
                        'is-invalid': errors.name && touched.name,
                        'is-valid': !errors.name && touched.name
                      })}
                    />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className={classnames('form-control', {
                        'is-invalid': errors.email && touched.email,
                        'is-valid': !errors.email && touched.email
                      })}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Your password"
                      className={classnames('form-control', {
                        'is-invalid': errors.password && touched.password,
                        'is-valid': !errors.password && touched.password
                      })}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button className="btn btn-info">Submit</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Register.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  RegisterSchema: PropTypes.object.isRequired
}

export default Register
