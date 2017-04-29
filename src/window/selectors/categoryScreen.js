import { createStructuredSelector } from 'reselect'

const newCategorySelector = state => state.newCategory

export default createStructuredSelector({
  newCategory: newCategorySelector,
})
