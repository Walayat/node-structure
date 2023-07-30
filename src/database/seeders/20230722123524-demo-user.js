"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "admin@getnada.com",
          password: "123",
          phone: "+923064252071",
          address: "mughalpura Lahore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
