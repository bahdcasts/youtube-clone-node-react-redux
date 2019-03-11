import React from 'react'
import { connect } from 'react-redux'

// components
import Channel from '@/components/Channel'

// actions
import { getChannel } from '@/store/actions'

class ChannelContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getChannel())
  }

  render() {
    return <Channel />
  }
}

export default connect()(ChannelContainer)
