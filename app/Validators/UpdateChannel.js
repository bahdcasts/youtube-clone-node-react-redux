'use strict'

class UpdateChannel {
  get rules() {
    return {
      name: 'required',
      description: 'required'
    }
  }
}

module.exports = UpdateChannel
