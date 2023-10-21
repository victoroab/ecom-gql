'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn('users', 'createdAt', {
    //   type: Sequelize.DataTypes.DATEONLY,
    //   // defaultValue: null,
    // })
    // await queryInterface.addColumn('orders', 'createdAt', {
    //   type: Sequelize.DataTypes.DATEONLY,
    //   // defaultValue: null,
    // })
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
