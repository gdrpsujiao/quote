const SET_EXAMPLE = 'SET_EXAMPLE'

const state = {
  test: 'APeng'
}

const mutations = {
  [SET_EXAMPLE]: (state, value) => {
    state.test = value
  }
}

const actions = {
  setExample({ commit }, val) {
    commit(SET_EXAMPLE, val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}