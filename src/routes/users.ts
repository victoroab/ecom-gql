import { Request, Response } from 'express'
import { resolve } from 'path'
import log from '../utils/logger'
const db = require('../../models/index')

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const newUser = await db.Users.create({
      firstName: 'joy',
      lastName: 'Doe',
      email: 'poy6@gmail.com',
    })
    res.json(newUser)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}
