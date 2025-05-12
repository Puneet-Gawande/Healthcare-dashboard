import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { Table, Button, Alert } from '../components/UIComponents';

const DoctorManager = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/doctors');
        setDoctors(response.data);
      } catch (err) {
        setError('Error fetching doctors data.');
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="doctor-manager">
      <h2>Doctor Manager</h2>
      {error && <Alert type="error" message={error} />}
      <Table data={doctors} />
      <Button onClick={() => alert('Add new doctor')}>Add Doctor</Button>
    </div>
  );
};

export default DoctorManager;
