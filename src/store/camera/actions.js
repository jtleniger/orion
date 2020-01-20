import { CameraControl } from '../../lib/camera-control'

export async function connect ({ commit, state, dispatch }) {
  const { success, model } = await CameraControl.connect()

  commit('setConnected', success)
  commit('setModel', model)

  if (!state.connected) {
    dispatch('error', 'Could not connect to a camera.')
  }
}

export function error ({ commit }, error) {
  commit('setError', error)

  setTimeout(function () {
    commit('setError', '')
  }, 3000)
}

export function disconnect ({ commit }) {
  commit('disconnect')
}

export async function setShutterSpeed ({ commit }, shutterSpeed) {
  commit('setShutterSpeed', shutterSpeed)
}

export async function capturePreview ({ commit, state }) {
  await CameraControl.capturePreview()
  commit('incPreviewKey')
}
