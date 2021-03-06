/* eslint @typescript-eslint/explicit-function-return-type:0, @typescript-eslint/no-unused-vars:0 */
import { QueryInterface, Sequelize } from 'sequelize';
module.exports = {
  up: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '00000000-0000-0000-0000-000000000000',
          name: 'Test name',
          birthday: new Date(),
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    return queryInterface.bulkDelete('Users', {}, {});
  },
};
