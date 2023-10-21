'use strict'
const Fakerator = require('fakerator')
let fakerator = Fakerator()

const SEED_COUNT = 100

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      for (let i = 0; i < 100; i++) {
        await queryInterface.bulkInsert(
          'Orders',
          [
            {
              item: fakerator.random.string(7),
              totalAmount: fakerator.random.number(400),
              order: fakerator.random.number(15, 109),
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
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Order', null, {})
  },
}
