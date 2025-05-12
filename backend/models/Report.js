const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  reportType: String,
  fileUrl: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
