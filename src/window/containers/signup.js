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
import * as AuthActions from '../actions/auth'
// import selector from '../selectors/settings'

class Signup extends React.Component {
  render() {
    return (
      <div style={{ color: '#fff' }}>
        Aqui va signup <a onClick={() => hashHistory.push('/')}>Devolver</a>
        <br />
        <input
          type="text"
          id="Name"
          placeholder="Nombre"
          value={this.props.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <input
          type="text"
          id="lastName"
          placeholder="Primer Apellido"
          value={this.props.lastName}
          onChange={e => this.setState({ lastName: e.target.value })}
        />
        <br />
        <input
          type="text"
          id="secondLastName"
          placeholder="Segundo Apellido"
          value={this.props.secondLastName}
          onChange={e => this.setState({ secondLastName: e.target.value })}
        />
        <br />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={this.props.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="text"
          id="phone"
          placeholder="Teléfono"
          value={this.props.phone}
          onChange={e => this.setState({ phone: e.target.value })}
        />
        <br />
        <input
          type="text"
          id="password"
          placeholder="Password"
          value={this.props.password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <br />
        <select
          name="gender"
          id="gender"
          onChange={e => this.setState({ gender: e.target.value })}
        >
          <option value="H">Hombre</option>
          <option value="M">Mujer</option>
          <option value="U">Indefinido</option>
        </select>
        <br />
        <button onClick={e => this.props.authActions.signup(this.state)}>
          Crear
        </button>
      </div>
    )
  }
}

const actions = dispatch => ({
  authActions: bindActionCreators(AuthActions, dispatch),
})

export default connect(null, actions)(Signup)
