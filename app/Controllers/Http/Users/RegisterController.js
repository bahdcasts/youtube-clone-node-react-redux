'use strict'

const User = use('App/Models/User')

class RegisterController {
  async register({ auth, request, response }) {
    // register user
    const user = await User.create(request.only(['name', 'email', 'password']))
    // generate jwt
    const token = await auth.generate(user)
    // return response
    return response.created({ user, token })
  }
}

module.exports = RegisterController
