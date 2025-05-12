const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate('patientId').populate('doctorId');
  res.json(appointments);
};

exports.createAppointment = async (req, res) => {
  const newAppointment = new Appointment(req.body);
  const saved = await newAppointment.save();
  res.status(201).json(saved);
};
