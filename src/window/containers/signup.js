import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import SignUp from '../components/SignUp'
import * as AuthActions from '../actions/auth'

class Signup extends Component {
  render() {
    return (
      <div style={{ color: '#fff' }}>
        <a onClick={() => hashHistory.push('/')}>Devolver</a>
        <SignUp />
      </div>
    )
  }
}

const actions = dispatch => ({
  authActions: bindActionCreators(AuthActions, dispatch),
})

export default connect(null, actions)(Signup)
