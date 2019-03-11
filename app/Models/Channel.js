'use strict'

const Model = use('Model')

class Channel extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Channel
