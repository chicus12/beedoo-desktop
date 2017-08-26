import { createStructuredSelector } from 'reselect'

const newCompanySelector = state => state.settings.name

export default createStructuredSelector({
  newCompany: newCompanySelector,
})
