import * as dotenv from 'dotenv'
dotenv.config()
import log from './logger'
import { Sequelize } from 'sequelize'

// const DB_USERNAME = process.env.DB_USERNAME as string
// const DB_NAME = process.env.DB_NAME as string
// const DB_HOST = process.env.DB_HOST as string
// const DB_PASSWORD = process.env.DB_PASSWORD as string
// const DIALECT = process.env.DIALECT as string

// export const sequelize = new Sequelize({
//   username: 'e7m6edxrsr7gie8gsloj',
//   host: 'aws.connect.psdb.cloud',
//   password: 'pscale_pw_HgmjqhV4tuuigRQc6zbTThzFoZAAChvkoPqpa5mngz3',
//   database: 'sequelize_test',
//   dialect: 'mysql',
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: true,
//     },
//   },
// })
export const sequelize = new Sequelize({
  username: 'root',
  password: '',
  database: 'ps_seq',
  host: 'localhost',
  dialect: 'mysql',
})

export async function connectDB() {
  try {
    await sequelize.authenticate()
  } catch (e) {
    log.error(e)
  }
}

/*
{
  database: 'e7m6edxrsr7gie8gsloj',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: 'mysql',
}
*/
