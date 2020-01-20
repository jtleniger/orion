export function status (state) {
  if (state.error) {
    return state.error
  }

  if (state.connected) {
    return 'Ready.'
  }

  return 'Not Connected.'
}

export function connected (state) {
  return state.connected
}

export function hasError (state) {
  return !!state.error
}

export function model (state) {
  if (state.connected) {
    return state.model
  }

  return ''
}

export function previewKey (state) {
  return state.previewKey
}
