import {species} from '../wrapper/species'

export default {

  /*
    Action that set the classNames after the call to the API
  */
  setClassNames: (data) => (state) => {
    return ({
      ...state,
      classNames: {val: data.list.reduce((acc, n) => [...acc, {name: n.className, count: n.count, state: false}], []), loaded: true}
    })
  },

  /*
    Action that set the result of the research
  */
  setResult: (data) => (state) => {
    window.scrollTo(0, 0)
    const newState = ({
      ...state,
      researchData: {
        ...state.researchData,
        updated: true
      },
      resultList: data.list.reduce((acc, n) => [...acc, {name: (data.from ? n.scientific_name : n.name), id: (data.from ? n.taxonid : n.internalTaxonId)}], [])
    })
    return newState
  },

  /*
    Action that set the research Parameters
  */
  setResearchData: (val) => (state) => { // [input, className, category, setResultat, setErrorMessage]
    const newState = ({
      ...state,
      researchData: {
        input: val.input !== null ? val.input : state.researchData.input,
        className: val.className !== null ? val.className : state.researchData.className,
        category: val.category !== null ? val.category : state.researchData.category,
        country: val.country !== null ? val.country : state.researchData.country,
        updated: true
      }
    })
    species().search({
      entry: newState.researchData.input,
      className: newState.researchData.className,
      category: newState.researchData.category,
      limit: 8
    }).then((resolvedValue) => {
      val.setResultat(resolvedValue)
    }, (error) => {
      val.setErrorMessage(error)
    })
    return newState
  },

  /*
    Action that set all the category
  */
  setCategory: (data) => (state) => {
    return ({
      ...state,
      categoryList: data.categories.reduce((acc, n) => [...acc, {name: n.redlistCategory, state: false}], [])
    })
  },

  /*
    Action that toggle (false if true | true if false) the categories
  */
  toggleCategory: (name) => (state) => {
    const id = state.categoryList.indexOf(state.categoryList.find(el => el.name === name))
    const arr = state.categoryList.reduce((acc, n) => [...acc, {name: n.name, state: false}], []) // setting all category to false (we don't want 2 activeted category at the same time)
    if (state.categoryList[id].state) {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          region: '',
          country: '',
          category: '',
          updated: false
        },
        categoryList: [...arr.slice(0, id), {name: name, state: !state.categoryList[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    } else {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          region: '',
          country: '',
          category: name,
          updated: false
        },
        categoryList: [...arr.slice(0, id), {name: name, state: !state.categoryList[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    }
  },

  /*
    Setting the error message
  */
  setErrorMess: (mess) => (state) => ({
    ...state,
    errMess: mess
  }),

  /*
    Setting the country list
  */
  setCountry: (data) => (state) => {
    return ({
      ...state,
      country: data.countryList.reduce((acc, n) => [...acc, {name: n.countryName, countryCode: n.countryCode, count: n.count}], []).slice(1, 20)
    })
  },

  /*
    Setting the region list
  */
  setRegion: (data) => (state) => {
    return ({
      ...state,
      region: data.regionList.reduce((acc, n) => [...acc, {name: n.regionName, count: n.count}], [])
    })
  },

  /*
    Setting the active species with an id
  */
  setActiveSpecies: (id) => (state) => {
    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        id: {val: id, state: true}
      },
      activeSpecies: true
    })
    return newState
  },

  /*
    Setting the threats for the active species
  */
  setThreat: (threats) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        threats: {val: threats.result.length === 0 ? [{title: 'Data not specified'}] : threats.result, state: true}
      },
      checkAllActive: countActive >= countKeys
    })

    return newState
  },

  /*
    Setting the habitats for the active species
  */
  setHabitat: (habitat) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        habitats: {val: habitat.result, state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  /*
    Setting the Measures for the active  species
  */
  setMeasure: (measure) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        measures: {val: measure.result, state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  /*
    Setting the historical assessment for the active species
  */
  setHistorical: (historical) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        historical: {val: historical.result, state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  /*
    Setting the country list where the active species is located
  */
  setSpecieCountries: (countries) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        countries: {val: countries.result, state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  /*
    Setting the population state of the active species
  */
  setPopulation: (pop) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        populationTrend: {val: pop.populationTrend[0].populationTrend ? pop.populationTrend[0].populationTrend : 'Data not specified', state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  /*
    Setting the scientific name and common names of the active species
  */
  setNameInfo: (infos) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 2 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        commonName: {val: infos.res.reduce((acc, n) => [...acc, {name: n.name, main: n.main}], []), state: true},
        scientificName: {val: infos.res[0] ? infos.res[0].scientificName : 'Data not specified', state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  /*
    Reset all the data from the activeSpecies
  */
  resetActiveSpecies: () => (state) => {
    return ({
      ...state,
      activeSpeciesInfos: {
        id: {val: -1, state: false},
        commonName: {val: [], state: false},
        scientificName: {val: '', state: false},
        threats: {val: [], state: false},
        habitats: {val: [], state: false},
        measures: {val: [], state: false},
        populationTrend: {val: '', state: false},
        historical: {val: '', state: false},
        countries: {val: [], state: false}
      },
      activeSpecies: false,
      checkAllActive: false
    })
  },

  /*
    Action that toggle (false if true | true if false) the compgroups
  */
  toggleCompGroup: (name) => (state) => {
    const id = state.classNames.val.indexOf(state.classNames.val.find(el => el.name === name))
    const arr = state.classNames.val.reduce((acc, n) => [...acc, {name: n.name, state: false}], []) // setting all category to false (we don't want 2 activeted category at the same time)
    if (state.classNames.val[id].state) {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          region: '',
          country: '',
          className: '',
          updated: false
        },
        classNames: {val: [...arr.slice(0, id), {name: name, count: state.classNames.val[id].count, state: !state.classNames.val[id].state}, ...arr.slice(id + 1, arr.length)], loaded: state.classNames.loaded}
      })
    } else {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          region: '',
          country: '',
          className: name,
          updated: false
        },
        classNames: {val: [...arr.slice(0, id), {name: name, count: state.classNames.val[id].count, state: !state.classNames.val[id].state}, ...arr.slice(id + 1, arr.length)], loaded: state.classNames.loaded}
      })
    }
  },

  /*
    Action that toggle (false if true | true if false) the country
  */
  toggleCountry: (name) => (state) => {
    return ({
      ...state,
      researchData: {
        input: '',
        className: '',
        category: '',
        region: '',
        country: state.country.find(c => c.name === name).countryCode,
        updated: false
      }
    })
  },

  /*
    Action that toggle (false if true | true if false) the region
  */
  toggleRegion: (name) => (state) => {
    return ({
      ...state,
      researchData: {
        input: '',
        className: '',
        category: '',
        country: '',
        region: name.toLowerCase().split(' ').join('_'),
        updated: false
      }
    })
  },
  /*
    Action that toggle (false if true | true if false) the left menu
  */
  toggleMenu: () => (state) => {
    return ({
      ...state,
      menuState: !state.menuState
    })
  }
}
