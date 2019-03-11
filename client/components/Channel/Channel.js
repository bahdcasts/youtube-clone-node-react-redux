import React from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

// components
import Page from '@/components/Page'

const Channel = ({ channel }) => (
  <Page>
    <div className="card card-default">
      <div className="card-header">My Channel</div>

      <div className="card-body">
        {channel.isFetching ? (
          <p>loading ...</p>
        ) : (
          <Formik
            onSubmit={console.log}
            initialValues={{
              name: channel.channel.name,
              description: channel.channel.description || ''
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="3"
                    rows="3"
                    className="form-control"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </form>
            )}
          </Formik>
        )}
      </div>
    </div>
  </Page>
)

Channel.propTypes = {
  channel: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    channel: PropTypes.shape({
      name: PropTypes.string
    })
  })
}

export default Channel
