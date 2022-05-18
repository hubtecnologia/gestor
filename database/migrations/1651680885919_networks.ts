import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Networks extends BaseSchema {
  protected tableName = 'networks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('sponsor_code')
      table.string('status').defaultTo('ACTIVE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
