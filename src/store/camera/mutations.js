export function connect (state) {
  if (state.camera.connect()) {
    state.connected = true
  }
}

export function setError (state, error) {
  debugger
  state.error = error
}

export function clearError (state) {
  state.error = ''
}

export function disconnect (state) {
  state.connected = false
}

export function setShutterSpeed (state, shutterSpeed) {
  state.shutterSpeed = shutterSpeed
}
