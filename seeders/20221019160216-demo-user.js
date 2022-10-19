'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
  
     const salt = await bcrypt.genSalt(10);
     const hashed_password = await bcrypt.hash("demopassword", salt);
     
     await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'obed.wordpress@gmail.com',
      role: 'admin',
      password:hashed_password,
      createdAt: "2020-10-20T10:33:46.802Z",
      updatedAt: "2020-10-20T10:33:46.802Z",
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
