const express = require("express");
const router = express.Router();
const orderController = require('../controllers').order;

router.get("/api/order", orderController.list);

module.exports = router;