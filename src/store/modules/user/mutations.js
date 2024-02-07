export default {
  setState (state, payload) {
    Object.keys(payload).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = payload[key]
      }
    })
  }
}
