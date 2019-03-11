'use strict'

const registerHelper = require('../../helpers/register')
const { test, trait } = use('Test/Suite')('Update Channel')

trait('Test/ApiClient')
trait('Auth/Client')

test('authenticated user can update their channel details', async ({
  assert,
  client
}) => {
  const user = await registerHelper(client)

  const updateDetails = {
    name: 'Updated channel name',
    description: 'Updated Channel description'
  }

  const response = await client
    .put('api/channel')
    .send(updateDetails)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)
  response.assertJSONSubset({
    name: updateDetails.name
  })

  const channel = await user.channel().fetch()

  assert.equal(channel.name, updateDetails.name)
  assert.equal(channel.description, updateDetails.description)
})
