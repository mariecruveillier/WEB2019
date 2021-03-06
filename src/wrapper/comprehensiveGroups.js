import {
  handleResult,
  sendRequest
} from './utils'

const compGroup = () => {
  return {
    list: () => new Promise((resolve, reject) => {
      return sendRequest(
        `/comp-group/list`,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    speciesByGroup: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('group')) {
        return reject(new Error('The group option is required.'))
      }
      return sendRequest(
        `/comp-group/getspecies/${options.group}`,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    stateDef: state => console.log(state)
  }
}

export { compGroup }
