import React, { useState, useEffect } from 'react';
import axios from '../../../frontend/src/utils/axiosConfig';
import { Table, Button, Alert } from '../components/UIComponents';

const AppointmentManager = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/appointments');
        setAppointments(response.data);
      } catch (err) {
        setError('Error fetching appointments.');
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="appointment-manager">
      <h2>Appointment Manager</h2>
      {error && <Alert type="error" message={error} />}
      <Table data={appointments} />
      <Button onClick={() => alert('Add new appointment')}>Add Appointment</Button>
    </div>
  );
};

export default AppointmentManager;
