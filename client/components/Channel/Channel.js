import React from 'react'
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
          <div>{channel.channel.name}</div>
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
