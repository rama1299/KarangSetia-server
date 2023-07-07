'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.ApplicationHistory, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Applications, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Comments, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Events, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Gallery, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.News, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Notifications, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Officers, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Services, 
        {
          foreignKey: 'user_id',
        })

      Users.hasMany(models.Verifications, 
        {
          foreignKey: 'user_id',
        })
    }
  }
  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true, 
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      is_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    }, {
    sequelize,
    modelName: 'Users',
    timestamps: true,
  });
  return Users;
};