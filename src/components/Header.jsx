import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newTicketControl">Ticket Control Center Module Arena Command Center Control Ticket</Link>
    </div>
    
  );
}

export default Header;
