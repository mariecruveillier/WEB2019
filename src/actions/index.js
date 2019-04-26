export default {

  /*
   actions for datas in radar chart
  */
  setClassNames: (data) => (state) => {
    return ({
      ...state,
      classNames: data.list.reduce((acc, n) => [...acc, {name: n.className, count: n.count}], [])
    })
  },

  setResult: (data) => (state) => {
    return ({
      ...state,
      resultList: data.list.reduce((acc, n) => [...acc, {name: n.name}], [])
    })
  },

  /* setCompGroups: (data) => (state) => {
    return ({
      ...state,
      comprGroups: data.result.reduce((acc, n) => [...acc, {name: n.group_name}], [])
    })
  },
  setQtySpeciesByGroup: (name) => (state) => {
    const id = state.comprGroups.indexOf(state.comprGroups.find(el => el.name === name))
    return ({
      ...state,
      comprGroups: [...comprGroups, n.group_name]
    })
  }, */
  setErrorMess: (mess) => (state) => ({
    ...state,
    errMess: mess
  })
}
