'use strict'

const Schema = use('Schema')

class ChannelSchema extends Schema {
  up() {
    this.create('channels', table => {
      table.increments()
      table.string('name')
      table.integer('user_id')
      table.text('description').nullable()
      table.string('profile_picture').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('channels')
  }
}

module.exports = ChannelSchema
