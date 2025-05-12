const Billing = require('../models/Billing');

exports.getAllBills = async (req, res) => {
  const bills = await Billing.findAll();
  res.json(bills);
};

exports.createBill = async (req, res) => {
  const bill = await Billing.create(req.body);
  res.status(201).json(bill);
};
