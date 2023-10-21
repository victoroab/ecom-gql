'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.addColumn('orders', 'createdAt', {
    //   type: Sequelize.DATE,
    //   defaultValue: null,
    // })
    // await queryInterface.addColumn('orders', 'updatedAt', {
    //   type: Sequelize.DATE,
    //   defaultValue: null,
    // })
    // await queryInterface.changeColumn('users', 'Orderid', {
    //   unique: false,
    // })
    // await queryInterface.removeConstraint('users', 'Orders_UserId_foreign_idx')
    // await queryInterface.removeConstraint('orders', 'Orders_UserId_foreign_idx')
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}
