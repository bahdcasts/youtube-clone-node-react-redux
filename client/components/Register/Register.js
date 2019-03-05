import React from 'react'
import { Formik } from 'formik'

const Register = () => (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header pb-0">
            <h1 className="text-center mt-5">Register</h1>
          </div>

          <div className="card-body">
            <Formik initialValues={{ name: '', email: '', password: '' }}>
              {({ values, handleChange }) => (
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Your password"
                      className="form-control"
                    />
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
