import {
  handleResult,
  sendRequest
} from './utils'

const threat = () => {
  return {
    fetch: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/threats/species/id/${options.id}/region/${options.region}`
          : `/threats/species/name/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/threats/species/id/${options.id}`
          : `/threats/species/name/${options.name}`
      }
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult
      )
    })
  }
}

export { threat }
