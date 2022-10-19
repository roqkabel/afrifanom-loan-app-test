"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          fullname: "Customer 1",
          isMarried: true,
          isEmployed: true,
          employerName: "Afrifanom",
          birthdate: "2020-8-18",
          address: "accra",
          phone: "0272638845",
          cardType: "passport",
          cardNumber: "12383949400",
          createdAt: "2020-10-20T10:33:46.802Z",
          updatedAt: "2020-10-20T10:33:46.802Z",
        },
        {
          fullname: "Customer 2",
          isMarried: true,
          isEmployed: true,
          employerName: "Melcom",
          birthdate: "2020-8-18",
          address: "accra",
          phone: "0272638845",
          cardType: "passport",
          cardNumber: "12383949400",
          createdAt: "2020-10-20T10:33:46.802Z",
          updatedAt: "2020-10-20T10:33:46.802Z",
        },
        {
          fullname: "Customer 3",
          isMarried: true,
          isEmployed: true,
          employerName: "Shoprite",
          birthdate: "2020-8-18",
          address: "accra",
          phone: "0272638845",
          cardType: "passport",
          cardNumber: "12383949400",
          createdAt: "2020-10-20T10:33:46.802Z",
          updatedAt: "2020-10-20T10:33:46.802Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
