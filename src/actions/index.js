import {species} from '../wrapper/species'

export default {

  setClassNames: (data) => (state) => {
    return ({
      ...state,
      classNames: data.list.reduce((acc, n) => [...acc, {name: n.className, count: n.count}], [])
    })
  },

  // Setting the result
  setResult: (data) => (state) => {
    const newState = ({
      ...state,
      researchData: {
        ...state.researchData,
        updated: true
      },
      resultList: data.list.reduce((acc, n) => [...acc, {name: n.name, id: n.internalTaxonId}], [])
    })
    return newState
  },

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

  // Setting all the categories
  setCategory: (data) => (state) => {
    return ({
      ...state,
      categoryList: data.categories.reduce((acc, n) => [...acc, {name: n.redlistCategory, state: false}], [])
    })
  },

  // toggle (if it's false -> true, if it's true -> false) category that have been clicked
  toggleCategory: (name) => (state) => {
    console.log(name)
    const id = state.categoryList.indexOf(state.categoryList.find(el => el.name === name))
    const arr = state.categoryList.reduce((acc, n) => [...acc, {name: n.name, state: false}], []) // setting all category to false (we don't want 2 activeted category at the same time)
    if (state.categoryList[id].state) {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
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
          category: name,
          updated: false
        },
        categoryList: [...arr.slice(0, id), {name: name, state: !state.categoryList[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    }
  },

  setErrorMess: (mess) => (state) => ({
    ...state,
    errMess: mess
  }),

  setCountry: (data) => (state) => {
    return ({
      ...state,
      country: data.countryList.reduce((acc, n) => [...acc, {name: n.countryName, count: n.count}], [])
    })
  },

  setRegion: (data) => (state) => {
    return ({
      ...state,
      region: data.regionList.reduce((acc, n) => [...acc, {name: n.regionName, count: n.count}], [])
    })
  },

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

  setThreat: (threats) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component
    
    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        threats: {val: threats.result, state: true}
      },
      checkAllActive: countActive >= countKeys
    })

    return newState
  },

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

  setPopulation: (pop) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 1 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        populationTrend: {val: pop.populationTrend[0].populationTrend ? pop.populationTrend[0].populationTrend : 'Unknown', state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  },

  setNameInfo: (infos) => (state) => {
    const allKeys = Object.keys(state.activeSpeciesInfos)
    const countKeys = allKeys.length
    const countActive = allKeys.reduce((acc, n) => state.activeSpeciesInfos[n].state ? acc + 1 : acc + 0, 0) + 2 // Count the number of loaded parts in the species Component

    const newState = ({
      ...state,
      activeSpeciesInfos: {
        ...state.activeSpeciesInfos,
        commonName: {val: infos.res.reduce((acc, n) => [...acc, {name: n.name, main: n.main}], []), state: true},
        scientificName: {val: infos.res[0] ? infos.res[0].scientificName : 'Unknown', state: true}
      },
      checkAllActive: countActive >= countKeys
    })
    return newState
  }, 

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
        populationTrend: {val: '', state: false}
      },
      activeSpecies: false,
      checkAllActive: false
    })
  },

  // toggle (if it's false -> true, if it's true -> false) comprehensiveGroup that have been clicked
  toggleCompGroup: (name) => (state) => {
    const id = state.classNames.indexOf(state.classNames.find(el => el.name === name))
    const arr = state.classNames.reduce((acc, n) => [...acc, {name: n.name, state: false}], []) // setting all category to false (we don't want 2 activeted category at the same time)
    if (state.classNames[id].state) {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          className: '',
          updated: false
        },
        classNames: [...arr.slice(0, id), {name: name, state: !state.classNames[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    } else {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          className: name,
          updated: false
        },
        classNames: [...arr.slice(0, id), {name: name, state: !state.classNames[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    }
  },

  toggleCountry: (name) => (state) => {
    console.log(name)
    const id = state.classNames.indexOf(state.country.find(el => el.name === name))
    const arr = state.country.reduce((acc, n) => [...acc, {name: n.name, state: false}], []) // setting all category to false (we don't want 2 activeted category at the same time)
    if (state.country.state) {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          country: name,
          updated: false
        },
        country: [...arr.slice(0, id), {name: name, state: !state.country.state}, ...arr.slice(id + 1, arr.length)]
      })
    } else {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          country: name,
          updated: false
        },
        country: [...arr.slice(0, id), {name: name, state: !state.country.state}, ...arr.slice(id + 1, arr.length)]
      })
    }
  }

}
