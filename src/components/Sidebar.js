import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaDatabase, FaTerminal } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Base</div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className="link" activeclassname="active">
            <FaTachometerAlt className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/live-query" className="link" activeclassname="active">
            <FaDatabase className="icon" /> Live Query
          </NavLink>
        </li>
        <li>
          <NavLink to="/live-terminal" className="link" activeclassname="active">
            <FaTerminal className="icon" /> Live Terminal
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
