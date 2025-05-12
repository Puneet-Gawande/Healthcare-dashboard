const Appointment = require('../models/Appointment');
const Billing = require('../models/Billing');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

exports.getSummaryStats = async (req, res) => {
  const patients = await Patient.countDocuments();
  const doctors = await Doctor.countDocuments();
  const appointments = await Appointment.countDocuments();
  const billingData = await Billing.find();
  const billing = billingData.reduce((acc, item) => acc + item.amount, 0);

  res.json({ patients, doctors, appointments, billing });
};

exports.getAppointmentsChart = async (req, res) => {
  const raw = await Appointment.aggregate([
    {
      $group: {
        _id: { $substr: ["$date", 0, 10] },
        count: { $sum: 1 },
      }
    },
    { $sort: { _id: 1 } }
  ]);
  const formatted = raw.map(item => ({ date: item._id, count: item.count }));
  res.json(formatted);
};

exports.getBillingChart = async (req, res) => {
  const raw = await Billing.aggregate([
    {
      $group: {
        _id: "$department",
        amount: { $sum: "$amount" }
      }
    }
  ]);
  const formatted = raw.map(item => ({ department: item._id, amount: item.amount }));
  res.json(formatted);
};
