const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

exports.createPatient = async (req, res) => {
  const newPatient = new Patient(req.body);
  const saved = await newPatient.save();
  res.status(201).json(saved);
};
