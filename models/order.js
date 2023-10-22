'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}
  Order.init(
    {
      item: DataTypes.STRING,
      totalAmount: DataTypes.FLOAT,
      order: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      orderDate: { type: DataTypes.DATE, defaultValue: new Date() },
    },
    {
      timestamps: true,
      sequelize,
      modelName: 'Order',
    }
  )
  return Order
}
