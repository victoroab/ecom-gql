'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}
  Order.init(
    {
      item: DataTypes.STRING,
      totalAmount: DataTypes.FLOAT,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  )
  return Order
}
