'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApplicationHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ApplicationHistory.belongsTo(models.Users,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })

      ApplicationHistory.belongsTo(models.Applications,
        {
          foreignKey: 'application_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    }
  }
  ApplicationHistory.init(
    { 
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true, 
          isInt: true, 
        },
      },
      application_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true, 
          isInt: true, 
        },
      },
      old_status: {
        type: DataTypes.STRING,
      },
      new_status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, 
        },
      },
      notes: {
        type: DataTypes.STRING,
      },
    }, {
    sequelize,
    modelName: 'ApplicationHistory',
    timestamps: true,
  });
  return ApplicationHistory;
};