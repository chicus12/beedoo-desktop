import * as Types from '../actions/types'

export default function newCategoryReducer(text = '', action = {}) {
  switch (action.type) {
    case Types.ADD_CATEGORY:
      return action.text
    case Types.ADD_COMPANY:
      return action.name
    default:
      return text
  }
}
