import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Base</h2>
      <nav>
        <NavLink to="/page1" className="link">Live Query</NavLink>
        <NavLink to="/page2" className="link">Live Terminal</NavLink>
      </nav>
    </div>
  );
}
