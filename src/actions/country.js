import {
  handleResult,
  sendRequest
} from './utils'

const country = () => {
  return {
    countryList: () => (state) => new Promise((resolve, reject) => {
      console.log(state)
      return sendRequest(
        '/country/list',
        resolve,
        reject,
        handleResult
      )
    }),
    species: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('country')) {
        return reject(new Error('The country option is required.'))
      }
      return sendRequest(
        `/country/getspecies/${options.country}`,
        resolve,
        reject,
        handleResult
      )
    })
  }
}

export { country }
