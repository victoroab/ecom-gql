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
    // await queryInterface.addColumn('users', 'id', {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // })
    // await queryInterface.addColumn('orders', 'id', {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
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
