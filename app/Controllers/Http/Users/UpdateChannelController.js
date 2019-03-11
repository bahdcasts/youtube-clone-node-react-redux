'use strict'

class UpdateChannelController {
  async update({ auth, request, response }) {
    const data = request.only(['name', 'description'])

    const user = await auth.getUser()

    const channel = await user.channel().fetch()

    channel.name = data.name
    channel.description = data.description

    await channel.save()

    return response.ok(channel)
  }
}

module.exports = UpdateChannelController
