'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemId: DataTypes.NUMBER,
    itemName: DataTypes.STRING,
    itemDesc: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    Item.hasMany(models.Order, {
      foreignKey: 'itemId',
      as: 'order',
    });
  };
  return Item;
};