export default {
  classNames: [],
  country: [],
  activeSpecies: false,
  activeSpeciesInfos: {
    id: {val: -1, state: false},
    commonName: {val: [], state: false},
    scientificName: {val: '', state: false},
    threats: {val: [], state: false},
    habitats: {val: [], state: false},
    measures: {val: [], state: false},
    populationTrend: {val: '', state: false},
    historical: {val: '', state: false}
  },
  checkAllActive: false,
  researchData: {
    input: '',
    className: '',
    category: '',
    country: '',
    region: '',
    updated: true
  },
  menuState: false
}
