import * as Types from './types'

export function setTickerWidth(width) {
  return {
    type: Types.TICKER_WIDTH,
    width: parseInt(width, 10),
  }
}

export function addCompany(name) {
  return {
    type: Types.ADD_COMPANY,
    name,
  }
}
