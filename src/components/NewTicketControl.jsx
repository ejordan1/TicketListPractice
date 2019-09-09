// controls new ticket submission/creation
import React from 'react';
import { appendFileSync } from 'fs';
import TicketForum from './TicketForum';

function NewTicketForm() {
    //variables used in form
  let _name = null;
  let _message = null;

  //this is the submit method needs to be passed/bound in App.jsx somehow
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
  }
  render () {
    if (checkforformVisible){
      //Display form
      <TicketForum 
      handleNewTicketFormSubmission = this.handleNewTicketFormSubmission
      />
    } else (checkforformNOTVisible) {
      //display Questions
      //pass in change button state method
      <Questions  handleNewTicketFormSubmission = this.handleNewTicketFormSubmission
      />
    }
  }
  return ( ); //this should return the creation of the ticket?
}

export default NewTicketForm;   
// if else branching point for states between Confirmation Qs and Form

//                       Header
//                 App 
//               NewFormControl            Error404
//             Form      Questions 
// Ticket
// TicketList