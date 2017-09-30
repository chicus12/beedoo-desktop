import { createStructuredSelector } from 'reselect'

const newUserSelector = state => state.settings

export default createStructuredSelector({
  newUser: newUserSelector,
})
