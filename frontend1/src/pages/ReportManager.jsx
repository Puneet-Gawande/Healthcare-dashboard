import React, { useState, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { Table, Button, Alert } from '../components/UIComponents';

const ReportManager = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/reports');
        setReports(response.data);
      } catch (err) {
        setError('Error fetching reports.');
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="report-manager">
      <h2>Report Manager</h2>
      {error && <Alert type="error" message={error} />}
      <Table data={reports} />
      <Button onClick={() => alert('Generate Report')}>Generate Report</Button>
    </div>
  );
};

export default ReportManager;
