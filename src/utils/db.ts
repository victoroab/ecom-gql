import * as dotenv from 'dotenv'
dotenv.config()
import log from './logger'
import { Sequelize } from 'sequelize'

type Dialect =
  | 'mysql'
  | 'postgres'
  | 'sqlite'
  | 'mariadb'
  | 'mssql'
  | 'db2'
  | 'snowflake'
  | 'oracle'

const USERNAME = process.env.DB_USERNAME as string
const PASSWORD = process.env.DB_PASSWORD as string
const DATABASE = process.env.DB_NAME as string
const HOST = process.env.HOST as string
const DIALECT = process.env.DIALECT as Dialect

export const sequelize = new Sequelize({
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  host: HOST,
  dialect: DIALECT,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
})

export async function connectDB() {
  try {
    await sequelize.authenticate()
  } catch (e) {
    log.error(e)
  }
}
