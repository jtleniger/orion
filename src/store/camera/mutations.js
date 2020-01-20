export function setError (state, error) {
  state.error = error
}

export function clearError (state) {
  state.error = ''
}

export function setConnected (state, connected) {
  state.connected = connected
}

export function setModel (state, model) {
  state.model = model
}

export function setShutterSpeed (state, shutterSpeed) {
  state.shutterSpeed = shutterSpeed
}

export function incPreviewKey (state) {
  state.previewKey++
}
