const Doctor = require('../models/Doctor');

exports.getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.createDoctor = async (req, res) => {
  const newDoctor = new Doctor(req.body);
  const saved = await newDoctor.save();
  res.status(201).json(saved);
};
