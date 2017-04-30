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
        <div className="app-name">
          <h2>BeeDoo</h2>
        </div>
        <div className="line">
          <span />
        </div>
        <div className="logo">
          <img src={logo} alt="beedo" />
        </div>
        <Form>
          <input type="text" placeholder="token" />
          <div className="submit">
            <input type="submit" value="Sign In" />
          </div>
        </Form>
        <div>
          <span>
            With love by @chicus12, @foxdie, @eslid
          </span>
        </div>
      </section>
    )
  }
}

const actions = dispatch => ({
  categoryActions: bindActionCreators(CategoryActions, dispatch),
})

export default connect(selector, actions)(Categories)
