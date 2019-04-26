import {
  handleResult,
  sendRequest
} from './utils'

const region = () => {
  return {
    all: () => new Promise((resolve, reject) => {
      return sendRequest(
        '/region/list',
        resolve,
        reject,
        handleResult,
        0
      )
    })
  }
}

export { region }
