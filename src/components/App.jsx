import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SecondLink from './SecondLink';
import HomePage from './HomePage';
import Header from './Header';
import Props from 'prop-types'; //hmmm?
import Ticket from './Ticket';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { formVisible = false,
      ticketList = null
    
    }; //there's more to this, dont remember what exactly
    //method binding goes here
    //this.handleNewTicketSubmission = handleNewTicketSubmission.bind(this) <- code looks something like this?
  }

  handleNewTicketSubmission(ticket)
  {
    var updatedTicketList = this.state.ticketList.slice(); //copies array, same as clone
    updatedTicketList.push(ticket);
    this.setState(ticketList, updatedTicketList); //colon?
  }

  changeButtonState()
  {
    this.setState(formVisible, true)
  }

  render() {

    return (
      <div>
        <Header />
        <Switch> 
          {/* Routes need to be refactored to pass props through (eventually) */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/newTicketControl' render = {
            handleNewTicketSubmission = this.handleNewTicketSubmission
          } />
        </Switch>
      </div>
    );
  }

}

export default App;

// var proptype prop = {
//   //formVisible
//   //ticketlist
// }

//do we need to make proptype app?
