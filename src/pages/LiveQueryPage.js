import React from 'react';
import './LiveQueryPage.css';

function LiveQueryPage() {
  return (
    <div className="live-query-container">
      <h2>Live Query</h2>

      <div className="query-engine-buttons">
        <button>osquery</button>
        <button>steampipe</button>
      </div>

      <label>Database</label>
      <select>
        <option>Select Database</option>
      </select>

      <textarea defaultValue={'SELECT * FROM users;'} rows={5} />

      <div className="button-group">
        <button>Run</button>
      </div>

      <div className="result-buttons">
        <button>Results</button>
        <button>Table view</button>
      </div>

      <input type="text" placeholder="Search by name..." />
      <button>Filter</button>

      <table>
        <thead>
          <tr>
            <th>uid</th>
            <th>username</th>
            <th>shell</th>
            <th>directory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>root</td>
            <td>/bin/bash</td>
            <td>/root</td>
          </tr>
          <tr>
            <td>501</td>
            <td>root</td>
            <td>/bin/bash</td>
            <td>/home/alice</td>
          </tr>
          <tr>
            <td>502</td>
            <td>bob</td>
            <td>/bin/bash</td>
            <td>/home/bob</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LiveQueryPage;
