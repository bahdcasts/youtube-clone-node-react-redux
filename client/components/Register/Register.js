import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import classnames from 'classnames'

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required()
    .min(6)
    .max(6)
})

const Register = () => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header pb-0">
            <h1 className="text-center mt-5">Register</h1>
          </div>

          <div className="card-body">
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              validationSchema={RegisterSchema}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <form>
                  <div
                    className={classnames('form-group', {
                      'has-danger': errors.name && touched.name,
                      'has-success': !errors.name && touched.name
                    })}
                  >
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={classnames('form-control', {
                        'form-control-danger': errors.name && touched.name,
                        'form-control-success': !errors.name && touched.name
                      })}
                    />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div
                    className={classnames('form-group', {
                      'has-danger': errors.email && touched.email,
                      'has-success': !errors.email && touched.email
                    })}
                  >
                    <input
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className={classnames('form-control', {
                        'form-control-danger': errors.email && touched.email,
                        'form-control-success': !errors.email && touched.email
                      })}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div
                    className={classnames('form-group', {
                      'has-danger': errors.password && touched.password,
                      'has-success': !errors.password && touched.password
                    })}
                  >
                    <input
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Your password"
                      className={classnames('form-control', {
                        'form-control-danger':
                          errors.password && touched.password,
                        'form-control-success':
                          !errors.password && touched.password
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

export default Register
