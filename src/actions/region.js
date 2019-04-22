import {
  handleResult,
  sendRequest
} from './utils'

const region = () => {
  return {
    all: () => (state) => new Promise((resolve, reject) => {
      console.log(state)
      return sendRequest(
        '/region/list',
        resolve,
        reject,
        handleResult
      )
    })
  }
}

export { region }
