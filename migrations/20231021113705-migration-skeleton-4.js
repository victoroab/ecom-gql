'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // try {
    //   const result = await queryInterface.sequelize.transaction(async (t) => {
    //     await queryInterface.addConstraint('orders', {
    //       fields: ['userId'],
    //       type: 'foreign key',
    //       name: 'user_ref_ibfk_1',
    //       references: {
    //         table: 'users',
    //         field: 'orId',
    //       },
    //       onDelete: 'CASCADE',
    //       onUpdate: 'CASCADE',
    //       transaction: t,
    //     })
    //   })
    // } catch (error) {
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
