const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  contact: String,
  history: String
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
