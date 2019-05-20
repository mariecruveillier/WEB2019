import { h } from 'hyperapp'
/* import entryList from '../entryList' */
import MainComponent from '../mainComponent'
import SpeciesComponent from '../speciesComponent'
import Wrapper from '../../wrapper/index'

export default (state, actions) =>
  <div id='mainContainer'>
    {
      state.classNames.val.length === 0 && (
        Wrapper.ClassName.list({limit: 8}).then((resolvedValue) => {
          actions.setClassNames(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      state.country.length === 0 && (
        Wrapper.Country.countryList().then((resolvedValue) => {
          actions.setCountry(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      state.country.length === 0 && (
        Wrapper.Region.all().then((resolvedValue) => {
          actions.setRegion(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }

    /*
      Loading active Species Data
    */
    {
      !state.activeSpeciesInfos.threats.state && state.activeSpeciesInfos.id.val !== -1 && (
        // Load Threat
        Wrapper.Threat.fetch({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setThreat(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }

    {
      !state.activeSpeciesInfos.habitats.state && state.activeSpeciesInfos.id.val !== -1 && (
        // Load Habitat
        Wrapper.Habitat.fetch({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setHabitat(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      !state.activeSpeciesInfos.populationTrend.state && state.activeSpeciesInfos.id.val !== -1 && (
        Wrapper.Species.populationTrend({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setPopulation(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      !state.activeSpeciesInfos.measures.state && state.activeSpeciesInfos.id.val !== -1 && (
        Wrapper.Measure.fetch({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setMeasure(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      !state.activeSpeciesInfos.commonName.state && state.activeSpeciesInfos.id.val !== -1 && (
        Wrapper.Species.nameInfo({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setNameInfo(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      !state.activeSpeciesInfos.historical.state && state.activeSpeciesInfos.id.val !== -1 && (
        Wrapper.Species.historical({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setHistorical(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {
      !state.activeSpeciesInfos.countries.state && state.activeSpeciesInfos.id.val !== -1 && (
        Wrapper.Species.countries({id: state.activeSpeciesInfos.id.val}).then((resolvedValue) => {
          actions.setSpecieCountries(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    <MainComponent data={{
      classNames: state.classNames.val,
      classNamesLoaded: state.classNames.loaded,
      countryList: state.country,
      regionList: state.region,
      resultList: state.resultList,
      setErrorMess: actions.setErrorMess,
      setResult: actions.setResult,
      search: Wrapper.Species.search,
      setCategory: actions.setCategory,
      setCountry: actions.setCountry,
      toggleCategory: actions.toggleCategory,
      toggleCompGroup: actions.toggleCompGroup,
      toggleCountry: actions.toggleCountry,
      toggleRegion: actions.toggleRegion,
      categoryList: state.categoryList,
      setResearchData: actions.setResearchData,
      resultUpdated: state.researchData.updated,
      researchData: {
        entry: state.researchData.input,
        className: state.researchData.className,
        category: state.researchData.category,
        country: state.researchData.country,
        region: state.researchData.region,
        limit: 8
      },
      setActive: actions.setActiveSpecies,
      toggleMenu: actions.toggleMenu,
      menuState: state.menuState
    }}/>

    {!state.checkAllActive && state.activeSpeciesInfos.id.val !== -1 && (
      <div id='loader'>
        <img src='https://i.pinimg.com/originals/12/6c/a6/126ca6bcc2616e4edf09f466e9925396.gif' alt='loader' />
      </div>
    )}
    <SpeciesComponent data={{
      isActive: state.activeSpecies,
      detailSpecies: state.activeSpeciesInfos,
      id: state.activeSpeciesInfos.id.val,
      resetAll: actions.resetActiveSpecies,
      allActive: state.checkAllActive
    }} />
  </div>
