"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
    {
      fullname: DataTypes.STRING,
      isMarried: DataTypes.BOOLEAN,
      isEmployed: DataTypes.BOOLEAN,
      employerName: DataTypes.STRING,
      birthdate: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      cardType: {
        type: DataTypes.ENUM,
        values: ["passport", "nhia", "driver-license"],
      },
      cardNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
