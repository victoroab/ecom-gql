import { Request, Response } from 'express'
import log from '../utils/logger'
const db = require('../../models/index')

export const createOrderHandler = async (req: Request, res: Response) => {
  try {
    const newOrder = await db.Order.create({
      item: 'pen',
      totalAmount: 200,
      // order: 9,
    })
    res.json(newOrder)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}

export const findTopOrdersHandler = async (req: Request, res: Response) => {
  try {
    const users = await db.Users.findAll({
      attributes: ['firstName', 'lastName'],
      include: db.Order,
    })

    const top = users
      .map((user: any, id: any) => {
        return {
          orders: user.Orders.length,
          firstName: user.firstName,
          lastName: user.lastName,
        }
      })
      .sort((a: any, b: any) => b.orders - a.orders)
      .filter((itm: any, idx: any) => {
        return idx < 10
      })

    res.json(top)
  } catch (e) {
    log.error(e)
    return res.status(409).send(e)
  }
}

/**
 *  attributes: [
        [db.sequelize.fn('COUNT', db.sequelize.col('userId')), 'total_items'],
      ],
 */
