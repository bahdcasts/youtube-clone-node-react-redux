import React from 'react'
import { connect } from 'react-redux'

// components
import Navbar from '@/components/Navbar'

class NavbarContainer extends React.Component {
  render() {
    return <Navbar {...this.props} />
  }
}

export default connect(state => ({ isAuthenticated: !!state.auth.user }))(
  NavbarContainer
)
