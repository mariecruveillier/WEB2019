import {
  handleResult,
  sendRequest
} from './utils'

const className = () => {
  return {
    list: (options) => new Promise((resolve, reject) => {
      return sendRequest(
        options.hasOwnProperty('limit') ? `/species/className/limit/${options.limit}` : `/species/className`,
        resolve,
        reject,
        handleResult,
        1
      )
    })
  }
}

export { className }
