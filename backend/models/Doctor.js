const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  contact: String,
  availability: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
