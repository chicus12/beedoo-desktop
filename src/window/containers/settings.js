import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Button, Image, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import * as SettingActions from '../actions/settings'

class Settings extends React.Component {
  render() {
    return (
      <div>Aqui va settings</div>
    )
  }
}

const actions = dispatch => ({
  settingsActions: bindActionCreators(SettingActions, dispatch),
})

const selector = state => ({
  tickerWidth: state.settings.tickerWidth,
})

export default connect(selector, actions)(Settings)
