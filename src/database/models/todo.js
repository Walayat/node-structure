"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, { foreignKey: "assigneeId" }); // A Todo belongs to a User
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      createdById: DataTypes.INTEGER,
      assigneeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );

  return Todo;
};
