'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const transaction = await queryInterface.sequelize.transaction()
    // try {
    //   await queryInterface.addConstraint('users', {
    //     fields: ['orId'],
    //     type: 'unique',
    //   })
    // } catch (error) {
    //   await transaction.rollback()
    //   throw error
    // }
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
