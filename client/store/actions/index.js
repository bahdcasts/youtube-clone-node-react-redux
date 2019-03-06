export const postRegister = data => ({
  type: 'POST_REGISTER',
  payload: {
    request: {
      method: 'POST',
      url: 'register',
      data
    }
  }
})
