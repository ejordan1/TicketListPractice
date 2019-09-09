import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function HomePage(props){
  console.log(props);
  return (
    <div>
      <p>home page</p>

    {props.ticketList.map((ticket) => 
      <Ticket 

        names = {ticket.names}
        message = {ticket.message}
        key = {ticket.id}
        />
    )}
    </div>
    );
    
}

HomePage.propTypes = {
  ticketList : PropTypes.array
}

export default HomePage;

//UID: THING