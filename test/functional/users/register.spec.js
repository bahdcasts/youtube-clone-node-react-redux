'use strict'

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
})
