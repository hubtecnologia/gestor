import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable().unique()
      table.integer('points').notNullable()
      // table.decimal('mimimun_invest').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
