const Item = require('../models').Item;
const Order = require('../models').Order;

module.exports = {
  list(req, res) {
    return Item
      .findAll({
        include: [{
          model: Order,
          as: 'Order'
        }],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((Items) => res.status(200).send(Items))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Item
      .findById(req.params.id, {
        include: [{
          model: Order,
          as: 'Order'
        }],
      })
      .then((Item) => {
        if (!Item) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }
        return res.status(200).send(Item);
      })
      .catch((error) => res.status(400).send(error));
  },

//   add(req, res) {
    
//   },

//   update(req, res) {
    
//   },

//   delete(req, res) {
    
//   },
};