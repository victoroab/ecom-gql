require('dotenv').config()

const fs = require('fs')

module.exports = {
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  development: {
    username: 'root',
    password: null,
    database: 'ps_seq',
    host: 'localhost',
    dialect: 'mysql',
  },
}
