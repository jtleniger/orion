export function connect ({ commit, state, dispatch }) {
  commit('connect')

  if (!state.connected) {
    dispatch('error', 'Could not connect to a camera.')
  }
}

export function error ({ commit }, error) {
  commit('setError', error)

  setTimeout(function () {
    commit('clearError')
  }, 3000)
}

export function disconnect ({ commit }) {
  commit('disconnect')
}

export function setShutterSpeed ({ commit }, shutterSpeed) {
  commit('setShutterSpeed', shutterSpeed)
}
