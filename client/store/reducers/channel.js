const initialState = {
  isFetching: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHANNEL_SUCCESS':
      return {
        ...state,
        isFetching: false,
        channel: action.payload.data
      }
    default:
      return state
  }
}
