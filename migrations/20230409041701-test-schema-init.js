'use strict'

var dbm
var type
var seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  db.runSql('CREATE EXTENSION IF NOT EXISTS "pgcrypto";')
  return db.createTable('test', {
    id: {
      type: 'uuid',
      primaryKey: true,
      notNull: true,
      defaultValue: new String('gen_random_uuid()'),
    },

    title: {
      type: 'text',
      notNull: true,
    },
  })
}

exports.down = function (db) {
  return db.dropTable('test')
}

exports._meta = {
  version: 1,
}
