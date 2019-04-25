export default {
  setCompGroups: (data) => (state) => {
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
  },
  setErrorMess: (mess) => (state) => ({
    ...state,
    errMess: mess
  })
}
