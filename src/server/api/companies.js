import request from 'request-promise'

const API_PATH = 'http://127.0.0.1:5050/api/companies'

export const fetchCompanies = () => {
  console.log('hols')
}

export const addCompany = company => {
  const options = {
    method: 'POST',
    uri: API_PATH,
    body: company,
    json: true,
  }

  request(options).then(parsedBody => parsedBody).catch(err => {
    console.error('An error ocurred', err)
  })
}
