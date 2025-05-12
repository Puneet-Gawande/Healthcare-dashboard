const Report = require('../models/Report');

exports.getReports = async (req, res) => {
  const reports = await Report.find().populate('patientId');
  res.json(reports);
};

exports.createReport = async (req, res) => {
  const newReport = new Report(req.body);
  const saved = await newReport.save();
  res.status(201).json(saved);
};
