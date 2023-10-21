import * as dotenv from 'dotenv'
dotenv.config()
import 'graphql-import-node'
import log from './utils/logger'
import { connectDB } from './utils/db'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
const db = require('./../models/index')

const app = express()
const PORT = parseInt(process.env.PORT as string)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

db.sequelize.sync()
app.listen(PORT, async () => {
  await connectDB()
  log.info(`server running on port ${PORT}`)
  routes(app)
})
