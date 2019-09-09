import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props) {
    return (
    <div>
    <h6>{props.names}</h6>
    <p>{props.message}</p>
    </div>
    );
}

Ticket.PropTypes = {
    names : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired
}

export default Ticket;