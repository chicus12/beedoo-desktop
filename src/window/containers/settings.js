import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import {
  Button,
  Image,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap'
import * as SettingActions from '../actions/settings'
import selector from '../selectors/settings'

class Settings extends React.Component {
  render() {
    return (
      <div style={{ color: '#fff' }}>
        Aqui va settings <a onClick={() => hashHistory.push('/')}>Devolver</a>
        <br />
        <input
          type="text"
          id="Nombre"
          value={this.props.newCompany}
          onChange={e => this.setState({ newCompany: e.target.value })}
        />
        <br />
        <button
          onClick={e => this.props.settingActions.addCompany('hhhhheeelllo')}
        >
          Crear
        </button>
      </div>
    )
  }
}

const actions = dispatch => ({
  settingActions: bindActionCreators(SettingActions, dispatch),
})

export default connect(selector, actions)(Settings)
