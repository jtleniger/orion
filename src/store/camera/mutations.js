export function connect (state) {
  state.connected = true
}

export function disconnect (state) {
  state.connected = false
}

export function setShutterSpeed (state, shutterSpeed) {
  state.shutterSpeed = shutterSpeed
}
