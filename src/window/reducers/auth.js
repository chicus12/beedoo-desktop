import * as Types from '../actions/types'

export default function authReducer(state = {}, action = {}) {
  switch (action.typer) {
    case Types.SIGN_UP:
      return {
        ...state,
        ...action,
      }
    case Types.LOGIN:
      return {
        ...state,
        ...action,
      }
    default:
      return state
  }
}
