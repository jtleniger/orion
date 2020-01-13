export function status (state) {
  if (state.connected) {
    return 'Ready.'
  }

  return 'Not Connected.'
}
