'use strict'

class RegisterUser {
  get rules() {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:12'
    }
  }

  get messages() {
    return {
      required: 'The {{ field }} is required.'
    }
  }

  async fails(errors) {
    const response = {}

    errors.forEach(error => {
      response[error.field] = error.message
    })

    this.ctx.response.unprocessableEntity(response)
  }
}

module.exports = RegisterUser
