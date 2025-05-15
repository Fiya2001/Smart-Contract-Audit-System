import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const AuditList = () => {
  const [audits, setAudits] = useState([]);
  const [filteredAudits, setFilteredAudits] = useState([]);
  const [usernameFilter, setUsernameFilter] = useState('');
  const [trackingIdFilter, setTrackingIdFilter] = useState('');


  const showAudit = (id) => {
    window.open('http://localhost:8080/analyzed-results/' + id + '.txt')
  }

  useEffect(() => {
    // Make an API call to fetch audit records
    axios.get('http://localhost:8080/get-audits')
      .then((response) => {
        console.log(response)
        setAudits(response.data);
        setFilteredAudits(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to handle filtering
  const handleFilter = () => {
    const filtered = audits.filter((audit) => {
      // Filter by username and trackingId
      return (
        audit.userName.includes(usernameFilter) &&
        audit.trackingId.toString().includes(trackingIdFilter)
      );
    });
    setFilteredAudits(filtered);
  };

  return (
    <div className="container mt-4">
      <h1> <a href="/"> AuditRecords</a> </h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Username"
          value={usernameFilter}
          onChange={(e) => setUsernameFilter(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Tracking ID"
          value={trackingIdFilter}
          onChange={(e) => setTrackingIdFilter(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={handleFilter}>
          Filter
        </button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Contract Name</th>
            <th>User Name</th>
            <th>Date</th>
            <th>Tracking ID</th>
            <th>View Audit</th>
            <th>Vulnerabilities </th>
          </tr>
        </thead>
        <tbody>
          {filteredAudits.map((audit) => (
            <tr key={audit.auditId}>
              <td>{audit.contractName}</td>
              <td>{audit.userName}</td>
              <td>{audit.date}</td>
              <td>{audit.trackingId}  </td>
              <td><Button variant="secondary" onClick={() => {
                showAudit(audit.trackingId)
              }}>
                View
              </Button> </td>
              <td>
                <Link to={`/report/${audit.auditId}`}>
                  <Button variant="secondary" >View </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditList;
