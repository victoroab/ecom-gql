'use strict'
const Fakerator = require('fakerator')
let fakerator = Fakerator()

const ORDER_COUNT = 5000
const USER_REF = 1000

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      for (let i = 0; i < ORDER_COUNT; i++) {
        await queryInterface.bulkInsert(
          'Orders',
          [
            {
              item: fakerator.random.string(7),
              totalAmount: fakerator.random.number(2000),
              order: fakerator.random.number(1, USER_REF),
            },
          ],
          { transaction }
        )
      }
      await transaction.commit()
    } catch (e) {
      await transaction.rollback()
      throw e
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
