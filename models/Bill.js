const { Model, DataTypes } = require("sequelize");
const sequelize = require("../src/db/connection");

class Bill extends Model {}

Bill.init(
  {
    acronym: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    definition: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "bill",
  }
);

module.exports = Bill;