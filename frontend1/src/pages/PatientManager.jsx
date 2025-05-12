import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { Table, Button, Alert } from '../components/UIComponents'; // Custom UI Components

const PatientManager = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/patients');
        setPatients(response.data);
      } catch (err) {
        setError('Error fetching patients data.');
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="patient-manager">
      <h2>Patient Manager</h2>
      {error && <Alert type="error" message={error} />}
      <Table data={patients} />
      <Button onClick={() => alert('Add new patient')}>Add Patient</Button>
    </div>
  );
};

export default PatientManager;
