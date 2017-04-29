import * as Types from './types'

export function add(symbol) {
  return {
    type: Types.ADD_CATEGORY,
    symbol: symbol.toUpperCase(),
  }
}

export function update(symbol) {
  return {
    type: Types.UPDATE_CATEGORY,
    symbol: symbol.toUpperCase(),
  }
}

export function remove(symbol) {
  return {
    type: Types.REMOVE_CATEGORY,
    symbol: symbol.toUpperCase(),
  }
}

export function expandDetail(symbol) {
  return {
    type: Types.EXPAND_CATEGORY_DETAILS,
    symbol: symbol.toUpperCase(),
  }
}

export function collapseDetail(symbol) {
  return {
    type: Types.COLLAPSE_CATEGORY_DETAILS,
    symbol: symbol.toUpperCase(),
  }
}
