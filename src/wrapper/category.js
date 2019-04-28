import {
  handleResult,
  sendRequest
} from './utils'

const category = () => {
  return {
    list: () => new Promise((resolve, reject) => {
      return sendRequest(
        `/categories/list`,
        resolve,
        reject,
        handleResult,
        1
      )
    })
  }
}

export { category }
