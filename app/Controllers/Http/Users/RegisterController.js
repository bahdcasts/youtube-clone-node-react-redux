'use strict'

const User = use('App/Models/User')
const Channel = use('App/Models/Channel')

class RegisterController {
  /**
   * Handle user registration
   *
   * @param {Object} context.auth
   * @param {Object} context.request
   * @param {Object} context.response
   */
  async register({ auth, request, response }) {
    const user = await User.create(request.only(['name', 'email', 'password']))

    await Channel.create({
      name: user.name,
      user_id: user.id
    })

    const token = await auth.generate(user)

    return response.created({ user, token })
  }
}

module.exports = RegisterController
