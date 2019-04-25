import {
  handleResult,
  sendRequest
} from './utils'

const habitat = () => {
  return {
    fetch: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint = ``
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/habitats/species/id/${options.id}/region/${options.region}`
          : `/habitats/species/name/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/habitats/species/id/${options.id}`
          : `/habitats/species/name/${options.name}`
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

export { habitat }
