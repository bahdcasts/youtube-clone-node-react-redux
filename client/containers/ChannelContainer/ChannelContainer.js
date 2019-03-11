import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// components
import Channel from '@/components/Channel'

// actions
import { getChannel } from '@/store/actions'

class ChannelContainer extends React.Component {
  /**
   * Component prop types
   *
   * @var {Object}
   */
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  /**
   * Get channel when component is mounted
   *
   * @return null
   */
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getChannel())
  }

  /**
   * Render component template
   *
   * @return {JSX}
   */
  render() {
    return <Channel {...this.props} />
  }
}

export default connect(state => ({ channel: state.channel }))(ChannelContainer)
