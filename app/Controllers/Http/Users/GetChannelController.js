'use strict'

class GetChannelController {
  /**
   * Get the channel for authenticated user
   *
   * @param {Object} context.auth
   * @param {Object} context.response
   *
   * @return {JSON}
   */
  async index({ auth, response }) {
    const user = await auth.getUser()
    const channel = await user.channel().fetch()

    return response.ok(channel)
  }
}

module.exports = GetChannelController
