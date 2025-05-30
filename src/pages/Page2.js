import React from 'react';

export default function Page2() {
  return (
    <div style={container}>
      <h2 style={heading}>Live Terminal</h2>

      {/* Toggle Buttons */}
      <div style={tabButtons}>
        <button style={activeButton}>agent</button>
        <button style={inactiveButton}>remote agent</button>
        <button style={inactiveButton}>cloud agent</button>
      </div>

      {/* Terminal Box */}
      <div style={terminalBox}>
        <p>Welcome to the Live Terminal</p>
        <p>$</p>
      </div>
    </div>
  );
}

// ✅ Styling objects (below the component)

const container = {
  padding: '40px',
  backgroundColor: '#fff',
  fontFamily: 'sans-serif'
};

const heading = {
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '20px'
};

const tabButtons = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px'
};

const activeButton = {
  backgroundColor: '#5b61f6',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  padding: '8px 18px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer'
};

const inactiveButton = {
  backgroundColor: '#f0f0f0',
  color: '#000',
  border: '1px solid #ccc',
  borderRadius: '20px',
  padding: '8px 18px',
  fontSize: '14px',
  cursor: 'pointer'
};

const terminalBox = {
  backgroundColor: '#000',
  color: '#0f0',
  fontFamily: 'monospace',
  fontSize: '14px',
  padding: '20px',
  borderRadius: '10px',
  minHeight: '300px'
};
