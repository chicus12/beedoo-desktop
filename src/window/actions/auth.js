import * as Types from './types'

export function signup(user) {
  return {
    type: Types.SIGN_UP,
    ...user,
  }
}

export function login(username, password) {
  return {
    type: Types.LOGIN,
    username,
    password,
  }
}
