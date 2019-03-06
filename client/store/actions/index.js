/**
 * Make post request to server to register a user
 *
 * @param {Object} data the user registration data from form
 * @return {Object} redux action
 */
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

/**
 * Set the auth data for a user
 *
 * @param {Object} data the user data from server
 * @return {Object} action sent to redux store
 */
export const setAuth = data => ({
  type: 'SET_AUTH',
  payload: data
})
