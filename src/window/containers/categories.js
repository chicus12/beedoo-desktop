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

class Categories extends React.Component {
  render() {
    return (
      <div class="category-container">Quecomemos holas</div>
    )
  }
}

const actions = dispatch => ({
  categoryActions: bindActionCreators(CategoryActions, dispatch),
})

export default connect(selector, actions)(Categories)
