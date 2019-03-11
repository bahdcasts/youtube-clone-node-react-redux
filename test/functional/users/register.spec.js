'use strict'

const User = use('App/Models/User')
const { test, trait } = use('Test/Suite')('Register User')

trait('Test/ApiClient')

test('should register a new user and return token', async ({
  client,
  assert
}) => {
  // make api request to server
  const response = await client
    .post('api/register')
    .send({
      name: 'kati frantz',
      email: 'kati@frantz.com',
      password: 'password'
    })
    .end()

  response.assertStatus(201).assertJSONSubset({
    user: {
      name: 'kati frantz',
      email: 'kati@frantz.com'
    },
    token: {}
  })

  const user = await User.query()
    .where('email', 'kati@frantz.com')
    .firstOrFail()

  // assert user has channel.
  const channel = await user.channel().fetch()

  assert.isNotNull(channel)
  assert.equal(channel.name, 'kati frantz')
})

test('should validate registration data before registering a user', async ({
  client
}) => {
  const response = await client
    .post('api/register')
    .send({
      name: 'bahdcoder',
      password: 'password'
    })
    .end()

  response.assertStatus(422).assertJSONSubset({
    email: 'The email is required.'
  })
})
