'use strict'

const User = use('App/Models/User')

class LoginController {
  /**
   * Handle login request for a user
   *
   * @param {Object} auth
   * @param {Object} request
   * @param {Object} response
   *
   * @return {Response}
   */
  async login({ auth, request, response }) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )

      const user = await User.query()
        .where('email', request.input('email'))
        .first()

      return response.ok({
        user,
        token
      })
    } catch (error) {
      return response.unprocessableEntity({
        email: 'These credentials do not match our records.'
      })
    }
  }
}

module.exports = LoginController
