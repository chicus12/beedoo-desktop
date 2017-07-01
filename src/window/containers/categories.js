import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import {
  Button,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

import * as CategoryActions from '../actions/categories'
import selector from '../selectors/categoryScreen'
import logo from '../assets/beedoo.png'

require('../styles/main.sass')

class Categories extends React.Component {
  render() {
    console.log('logo', logo)
    return (
      <section className="sign">
        <div className="logo">
          <img src={logo} alt="beedo" />
        </div>
        <div className="app-name">
          <h2>BeeDoo</h2>
        </div>
        <Form className="login-form">
          <div className="input-container">
            <input type="text" id="email" required />
            <label htmlFor="email"><i className="icon-envelop" /> Email</label>
            <div className="bar" />
          </div>

          <div className="input-container">
            <input type="password" id="password" required />
            <label htmlFor="password"><i className="icon-key" /> Password</label>
            <div className="bar" />
          </div>

          <div className="submit">
            <input type="submit" value="Sign In" />
          </div>
        </Form>

        <span className="not-member">
          Not a member yet? <a href="#">SignUp Now</a>
        </span>

        <span className="alternative-login">
          Or Login with <i className="icon-ctrl icon-rotate"></i>
        </span>

        <div className="auth">
          <div className="buttons facebook">
            <i className="icon-facebook"></i> <span>Login with Facebook</span>
          </div>
          <div className="buttons google">
            <i className="icon-google-plus"></i> <span>Login with Google</span>
          </div>
        </div>

        <footer>
          <span className="contributors">
            made with <i className="icon-heart" /> by chicus12, foxdie, eslid
          </span>
        </footer>
      </section>
    )
  }
}

const actions = dispatch => ({
  categoryActions: bindActionCreators(CategoryActions, dispatch),
})

export default connect(selector, actions)(Categories)
