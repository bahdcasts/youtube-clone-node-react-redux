'use strict'

const Factory = use('Factory')
const User = use('App/Models/User')
const registerHelper = require('../../helpers/register')
const { test, trait } = use('Test/Suite')('Get Channnel')

trait('Test/ApiClient')
trait('Auth/Client')

test('should fetch the channel for authenticated user', async ({
  assert,
  client
}) => {
  const user = await registerHelper(client)

  const response = await client
    .get('api/channel')
    .loginVia(user, 'jwt')
    .end()

  // assertions
  response.assertStatus(200).assertJSONSubset({
    name: user.name
  })
})
