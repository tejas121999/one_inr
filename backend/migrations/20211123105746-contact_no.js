'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users_receipts', 'contact_no', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })


  },

  down: (queryInterface, Sequelize) => {
   
  }
};
  

