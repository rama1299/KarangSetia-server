'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Applications.belongsTo(models.Users, {
        foreignKey: 'users_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })

      Applications.hasMany(models.ApplicationHistory, {
        foreignKey: 'application_id',
      })

      Applications.hasMany(models.Comments, {
        foreignKey: 'application_id',
      })

      Applications.hasMany(models.Documents, {
        foreignKey: 'application_id',
      })

      Applications.hasMany(models.Notifications, {
        foreignKey: 'application_id',
      })

      Applications.belongsTo(models.Services, {
        foreignKey: 'service_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Applications.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true, 
          isInt: true, 
        },
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true, 
          isInt: true, 
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, 
        },
      },
    }, {
    sequelize,
    modelName: 'Applications',
    timestamps: true,
  });
  return Applications;
};