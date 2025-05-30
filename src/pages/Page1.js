import React from 'react';

export default function Page1() {
  return (
    <div style={card}>
      <h2 style={heading}>Live Query</h2>

      <div style={tabButtons}>
        <button style={pillButton}>osquery</button>
        <button style={pillButton}>streampipe</button>
      </div>

      <label style={label}>Database</label>
      <select style={input}>
        <option>Select Database</option>
      </select>

      <textarea
        defaultValue="SELECT * FROM users;"
        style={textarea}
      />

      <div style={{ marginBottom: '20px' }}>
  <button style={primaryButton}>Run</button>
</div>

<div style={buttonGroup}>
  <button style={primaryButton}>Results</button>
  <button style={{ ...primaryButton, marginLeft: '10px' }}>Table view</button>
</div>


      <div style={searchRow}>
        <input placeholder="Search by name..." style={input} />
        <button style={filterButton}>Filter</button>
      </div>

      <table style={table}>
        <thead>
          <tr>
            <th style={th}>uid</th>
            <th style={th}>username</th>
            <th style={th}>shell</th>
            <th style={th}>directory</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={td}>0</td><td style={td}>root</td><td style={td}>/bin/bash</td><td style={td}>/root</td></tr>
          <tr><td style={td}>501</td><td style={td}>root</td><td style={td}>/bin/bash</td><td style={td}>/home/alice</td></tr>
          <tr><td style={td}>502</td><td style={td}>bob</td><td style={td}>/bin/bash</td><td style={td}>/home/bob</td></tr>
          <tr><td style={td}>502</td><td style={td}>bob</td><td style={td}>/bib/bash</td><td style={td}>/home/bob</td></tr>
        </tbody>
      </table>
    </div>
  );
}

// ✅ Styling Constants

const card = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  fontFamily: 'sans-serif'
};

const heading = {
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '20px'
};

const label = {
  fontWeight: '500',
  display: 'block',
  marginTop: '20px',
  marginBottom: '10px'
};

const input = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  marginBottom: '20px',
  fontSize: '14px'
};

const textarea = {
  ...input,
  minHeight: '70px',
  fontFamily: 'monospace'
};

const primaryButton = {
  backgroundColor: '#5b61f6',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '500',
  marginRight: '10px',
  cursor: 'pointer'
};

const filterButton = {
  ...primaryButton,
  padding: '8px 18px',
  marginLeft: '10px'
};

const pillButton = {
  backgroundColor: '#5b61f6',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '8px 18px',
  fontSize: '13px',
  fontWeight: '500',
  cursor: 'pointer'
};

const tabButtons = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px'
};

const buttonGroup = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px'
};

const searchRow = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px'
};

const table = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px'
};

const th = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #eee',
  color: '#444'
};

const td = {
  padding: '12px',
  borderBottom: '1px solid #f4f4f4'
};
