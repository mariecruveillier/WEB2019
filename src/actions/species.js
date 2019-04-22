import {
  handleResult,
  sendRequest
} from './utils'

const species = () => {
  return {
    fetch: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('page')) {
        return reject(new Error('The page option is required.'))
      }
      return sendRequest(
        options.hasOwnProperty('region')
          ? `/species/region/${options.region}/page/${options.page}`
          : `/species/page/${options.page}`,
        resolve,
        reject,
        handleResult
      )
    }),

    count: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      return sendRequest(
        options.hasOwnProperty('region')
          ? `/speciescount/region/${options.region}`
          : '/speciescount',
        resolve,
        reject,
        handleResult
      )
    }),

    citation: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/species/citation/id/${options.id}/region/${options.region}`
          : `/species/citation/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/species/citation/id/${options.id}`
          : `/species/citation/${options.name}`
      }
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult
      )
    }),

    byCategory: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('category')) {
        return reject(new Error('The category option is required.'))
      }
      return sendRequest(
        `/species/category/${options.category}`,
        resolve,
        reject,
        handleResult
      )
    }),

    find: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/species/id/${options.id}/region/${options.region}`
          : `/species/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/species/id/${options.id}`
          : `/species/${options.name}`
      }
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult
      )
    }),

    narrative: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/species/narrative/${options.id}/region/${options.region}`
          : `/species/narrative/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/species/narrative/${options.id}`
          : `/species/narrative/${options.name}`
      }
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult
      )
    }),

    synonym: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name')) {
        return reject(new Error('The name option is required.'))
      }
      return sendRequest(
        `/species/synonym/${options.name}`,
        resolve,
        reject,
        handleResult
      )
    }),

    commonNames: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name')) {
        return reject(new Error('The name option is required.'))
      }
      return sendRequest(
        `/species/common_names/${options.name}`,
        resolve,
        reject,
        handleResult
      )
    }),

    countries: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/species/countries/id/${options.id}/region/${options.region}`
          : `/species/countries/name/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/species/countries/id/${options.id}`
          : `/species/countries/name/${options.name}`
      }
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult
      )
    }),

    historical: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
        return reject(new Error('You must provide either a name or an id'))
      }
      let endpoint
      if (options.hasOwnProperty('region')) {
        endpoint = options.hasOwnProperty('id')
          ? `/species/history/id/${options.id}/region/${options.region}`
          : `/species/history/name/${options.name}/region/${options.region}`
      } else {
        endpoint = options.hasOwnProperty('id')
          ? `/species/history/id/${options.id}`
          : `/species/history/name/${options.name}`
      }
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult
      )
    }),

    link: (options) => (state) => new Promise((resolve, reject) => {
      console.log(state)
      if (!options.hasOwnProperty('name')) {
        return reject(new Error('The name option is required.'))
      }
      return sendRequest(
        `/weblink/${options.name}`,
        resolve,
        reject,
        handleResult
      )
    })
  }
}

export { species }
