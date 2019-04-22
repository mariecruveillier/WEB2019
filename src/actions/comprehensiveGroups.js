import {
  handleResult,
  sendRequest
} from './utils'

const compGroup = () => {
  return {
    list: () => (state) => new Promise((resolve, reject) => {
      console.log(state)
      return sendRequest(
        `/comp-group/list`,
        resolve,
        reject,
        handleResult
      )
    }),

    speciesByGroup: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('group')) {
        return reject(new Error('The group option is required.'))
      }
      return sendRequest(
        `/comp-group/getspecies/${options.group}`,
        resolve,
        reject,
        handleResult
      )
    })
  }
}

export { compGroup }
