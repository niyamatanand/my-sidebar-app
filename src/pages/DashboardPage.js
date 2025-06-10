import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome</h2>

      <div className="cards">
        <div className="card">
          <p>Total Queries</p>
          <h3>132</h3>
        </div>
        <div className="card">
          <p>Active Endpoints</p>
          <h3>20</h3>
        </div>
        <div className="card">
          <p>Saved Queries</p>
          <h3>20</h3>
        </div>
      </div>

      <div className="quick-launch">
        <h3>Quick Launch</h3>
        <div className="buttons">
          <button className="launch-btn">+ New Osquery Query</button>
          <button className="launch-btn">+ New Steampipe Query</button>
        </div>
      </div>

      <div className="query-history">
        <h3>Recent Query History</h3>
        <table>
          <thead>
            <tr>
              <th>Query</th>
              <th>Engine</th>
              <th>Run At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SELECT * FROM users;</td>
              <td>Osquery</td>
              <td>Today, 10:30 AM</td>
            </tr>
            <tr>
              <td>SELECT id, name FROM users;</td>
              <td>Steampipe</td>
              <td>Today, 9:15 AM</td>
            </tr>
            <tr>
              <td>SELECT DISTINCT publisher FROM books;</td>
              <td>Steampipe</td>
              <td>Yesterday, 4:45 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
