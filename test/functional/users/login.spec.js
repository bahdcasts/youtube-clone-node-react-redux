'use strict'

const User = use('App/Models/User')
const Factory = use('Factory')
const { trait, test } = use('Test/Suite')('Users Login')

trait('Test/ApiClient')

test('should login user and return auth token', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').make()

  await User.create({
    name: user.name,
    email: user.email,
    password: user.password
  })

  const response = await client
    .post('api/login')
    .send({
      email: user.email,
      password: user.password
    })
    .end()

  response.assertStatus(200).assertJSONSubset({
    user: {
      email: user.email,
      name: user.name
    },
    token: {}
  })
})

test('should return email error if credentials are not right', async ({
  assert,
  client
}) => {
  const user = await Factory.model('App/Models/User').make()

  const response = await client
    .post('api/login')
    .send({
      email: user.email,
      password: user.password
    })
    .end()

  response.assertStatus(422).assertJSONSubset({
    email: 'These credentials do not match our records.'
  })
})
