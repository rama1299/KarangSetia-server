'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Photo.belongsTo(models.Gallery, {
        foreignKey: 'gallery_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Photo.init(
    {
      gallery_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true, 
          isInt: true,
        },
      },
      image_file: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, 
        },
      },
    }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};