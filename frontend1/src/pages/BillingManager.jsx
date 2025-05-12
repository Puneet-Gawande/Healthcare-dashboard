import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { Table, Button, Alert } from '../components/UIComponents';

const BillingManager = () => {
  const [bills, setBills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await axios.get('/billing');
        setBills(response.data);
      } catch (err) {
        setError('Error fetching bills.');
      }
    };
    fetchBills();
  }, []);

  return (
    <div className="billing-manager">
      <h2>Billing Manager</h2>
      {error && <Alert type="error" message={error} />}
      <Table data={bills} />
      <Button onClick={() => alert('Generate Bill')}>Generate Bill</Button>
    </div>
  );
};

export default BillingManager;
