import React from 'react';
import Proptype from 'prop-types';
import { v4 } from 'uuid';

function TicketForum(props){
    //variables used in form
    let _names = null;
    let _message = null;
  
    //this is the submit method needs to be passed/bound in App.jsx somehow
    function handleNewTicketSubmission(event) {
      console.log(_names.value);
      console.log(_message.value);
      event.preventDefault();
      props.onNewTicketFormSubmission({names : _names.value, message : _message.value, id: v4()});
      _names.value = '';
      _message.value = '';
      
    }


  return (
    <div>
      <p>second page</p>
      <form onSubmit = {handleNewTicketSubmission}>
        
        <input type = "text" id = "names" placeholder = "Name" 
         ref = {(input) => {_names = input;}} />
         
        {/* code looks something like this? */}
        <input type = "text" id = "message" placeholder = "Message" 
        ref = {(input) => {_message = input;}} />
        
        {/* //code looks something like this? */}

        <button  type="submit">Submit</button>
      </form>
    </div>
    
  );
}

export default TicketForum;

TicketForum.Proptype = {
  handleNewTicketSubmission : Proptype.func
}

//what object were they setting the values of?
//