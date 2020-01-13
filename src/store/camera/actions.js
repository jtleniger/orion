export function connect ({ commit }) {
  commit('connect')
}

export function disconnect ({ commit }) {
  commit('disconnect')
}

export function setShutterSpeed ({ commit }, shutterSpeed) {
  commit('setShutterSpeed', shutterSpeed)
}
