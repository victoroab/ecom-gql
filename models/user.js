'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, { foreignKey: 'order' })
      models.Order.hasOne(User)
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      OrderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  )
  return User
}
