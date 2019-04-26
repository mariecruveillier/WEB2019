import {
  handleResult,
  sendRequest
} from './utils'

const country = () => {
  return {
    countryList: () => new Promise((resolve, reject) => {
      return sendRequest(
        '/country/list',
        resolve,
        reject,
        handleResult,
        0
      )
    }),
    species: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('country')) {
        return reject(new Error('The country option is required.'))
      }
      return sendRequest(
        `/country/getspecies/${options.country}`,
        resolve,
        reject,
        handleResult,
        0
      )
    })
  }
}

export { country }
