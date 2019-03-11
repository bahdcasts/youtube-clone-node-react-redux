let initialState = null

try {
  initialState = JSON.parse(localStorage.getItem('auth'))
} catch (e) {}

if (!initialState) {
  initialState = {
    user: null,
    token: null
  }
}

export default (state = initialState, action) => {
  if (action.type === 'SET_AUTH') {
    return action.payload
  }

  return state
}
