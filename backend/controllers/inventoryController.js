const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
  const items = await Inventory.findAll();
  res.json(items);
};

exports.addInventoryItem = async (req, res) => {
  const item = await Inventory.create(req.body);
  res.status(201).json(item);
};
