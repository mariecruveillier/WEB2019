import {
  handleResult,
  sendRequest
} from './utils'

const species = () => {
  return {
    nameInfo: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('id')) {
        return reject(new Error('The page option is required.'))
      }
      return sendRequest(
        `/species/nameInfo/${options.id}`,
        resolve,
        reject,
        handleResult,
        1
      )
    }),

    populationTrend: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('id')) {
        return reject(new Error('The page option is required.'))
      }
      return sendRequest(
        `/population/${options.id}`,
        resolve,
        reject,
        handleResult,
        1
      )
    }),

    fetch: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('page')) {
        return reject(new Error('The page option is required.'))
      }
      return sendRequest(
        options.hasOwnProperty('region')
          ? `/species/region/${options.region}/page/${options.page}`
          : `/species/page/${options.page}`,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    count: (options) => new Promise((resolve, reject) => {
      return sendRequest(
        options.hasOwnProperty('region')
          ? `/speciescount/region/${options.region}`
          : '/speciescount',
        resolve,
        reject,
        handleResult,
        0
      )
    }),
    /* ICICICICICICICIICCI RECHEHRHEHFHE */
    search: (options) => new Promise((resolve, reject) => {
      let endpoint = `/species/search/${options.entry === '' ? null : options.entry}/class/${options.className === '' ? null : options.className}/category/${options.category === '' ? null : options.category}/limit/${options.limit}`
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult,
        1
      )
    }),

    citation: (options) => new Promise((resolve, reject) => {
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
        handleResult,
        0
      )
    }),

    byCategory: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('category')) {
        return reject(new Error('The category option is required.'))
      }
      return sendRequest(
        `/species/category/${options.category}`,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    find: (options) => new Promise((resolve, reject) => {
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
        handleResult,
        0
      )
    }),

    narrative: (options) => new Promise((resolve, reject) => {
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
        handleResult,
        0
      )
    }),

    synonym: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('name')) {
        return reject(new Error('The name option is required.'))
      }
      return sendRequest(
        `/species/synonym/${options.name}`,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    commonNames: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('name')) {
        return reject(new Error('The name option is required.'))
      }
      return sendRequest(
        `/species/common_names/${options.name}`,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    countries: (options) => new Promise((resolve, reject) => {
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
        handleResult,
        0
      )
    }),

    historical: (options) => new Promise((resolve, reject) => {
      console.log('getting historical data')
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
      console.log('end Historical')
      return sendRequest(
        endpoint,
        resolve,
        reject,
        handleResult,
        0
      )
    }),

    link: (options) => new Promise((resolve, reject) => {
      if (!options.hasOwnProperty('name')) {
        return reject(new Error('The name option is required.'))
      }
      return sendRequest(
        `/weblink/${options.name}`,
        resolve,
        reject,
        handleResult,
        0
      )
    })
  }
}

export { species }
