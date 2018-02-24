import request from 'request-promise'

const API_PATH = 'http://127.0.0.1:5050/api/'

export const fetchCompanies = () => {
  console.log('hols')
}

export const addCompany = company => {
  const options = {
    method: 'POST',
    uri: `${API_PATH}companies`,
    body: company,
    json: true,
  }

  request(options)
    .then(parsedBody => parsedBody)
    .catch(err => {
      console.error('An error ocurred', err)
    })
}

export const addUser = user => {
  const options = {
    method: 'POST',
    uri: `${API_PATH}auth/signup/`,
    body: user,
    json: true,
  }

  return request(options)
    .then(parsedBody => parsedBody)
    .catch(err => {
      console.error('An error ocurred', err)
    })
}
