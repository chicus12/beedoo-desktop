import * as Types from '../actions/types'

const initialState = {
  tickerWidth: 300,
  name: 'hola',
}

export default function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.TICKER_WIDTH:
      return {
        ...state,
        tickerWidth: action.width,
      }
    case Types.ADD_COMPANY:
      return {
        ...state,
        name: action.name,
      }
    default:
      return state
  }
}
