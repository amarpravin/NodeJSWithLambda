'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderId: DataTypes.NUMBER,
    itemId: DataTypes.NUMBER,
    orderDate: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Item); 
  };
  return Order;
};