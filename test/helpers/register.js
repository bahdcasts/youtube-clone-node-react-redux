const Factory = use('Factory')
const User = use('App/Models/User')

module.exports = async client => {
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

  return user
}
