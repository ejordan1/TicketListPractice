import React from 'react';
import Proptype from 'proptype';

function TicketForum(props){
  return (
    <div>
      <p>second page</p>
      <form>
        
        <Input type = "text" id = "name" placeholder = "Name" />
        ref = {(input) => {_names = input;}} 
        {/* code looks something like this? */}
        <Input type = "text" id = "message" placeholder = "Message" />
        ref = {(input) => {_message = input;}} 
        {/* //code looks something like this? */}

        <button onSubmit = {handleNewTicketSubmission} type="submit">Submit</button>
      </form>
    </div>
    
  );
}

export default TicketForum;

Proptype proptype = {
  handleNewTicketSubmission = Proptype.func;
}

//what object were they setting the values of?
//