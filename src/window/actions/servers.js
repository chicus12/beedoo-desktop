import * as Types from './types'

export function add(symbol) {
  return {
    type: Types.ADD_SERVER,
    symbol: symbol.toUpperCase(),
  }
}

export function remove(symbol) {
  return {
    type: Types.REMOVE_SERVER,
    symbol: symbol.toUpperCase(),
  }
}

export function update(symbol) {
  return {
    type: Types.UPDATE_SERVER,
    symbol: symbol.toUpperCase(),
  }
}
