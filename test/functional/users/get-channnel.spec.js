'use strict'

const Factory = use('Factory')
const User = use('App/Models/User')
const { test, trait } = use('Test/Suite')('Get Channnel')

trait('Test/ApiClient')
trait('Auth/Client')

test('should fetch the channel for authenticated user', async ({
  assert,
  client
}) => {
  // generate fake user
  const userDetails = await Factory.model('App/Models/User').make()
  // register user
  await client
    .post('api/register')
    .send({
      name: userDetails.name,
      email: userDetails.email,
      password: 'password'
    })
    .end()

  const user = await User.query()
    .where('email', userDetails.email)
    .first()
  // make api request to get user channel

  const response = await client
    .get('api/channel')
    .loginVia(user, 'jwt')
    .end()

  console.log(response.body)

  // assertions
  response.assertStatus(200).assertJSONSubset({
    name: user.name
  })
})
