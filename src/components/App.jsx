import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewTicketControl from './NewTicketControl';
import HomePage from './HomePage';
import Header from './Header';
import Props from 'prop-types'; //hmmm?
import Ticket from './Ticket';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketList : []
    
    }; //there's more to this, dont remember what exactly
    //method binding goes here
    // <- code looks something like this?
    this.handleNewTicketSubmission = this.handleNewTicketSubmission.bind(this);
    }

  handleNewTicketSubmission(ticket)
  {
    console.log("SDF" + ticket.names);
    console.log("SDF" + ticket.message);
    var updatedTicketList = this.state.ticketList.slice(); //copies array, same as clone
    updatedTicketList.push(ticket);
    
    this.setState({ticketList: updatedTicketList});
   
  }



  render() {

    return (
      <div>
        <Header />
        <Switch> 
          {/* Routes need to be refactored to pass props through (eventually) */}
          <Route exact path='/' render={()=><HomePage ticketList={this.state.ticketList}/>} />
          <Route exact path='/newTicket' render = {()=><NewTicketControl
            onNewTicketFormSubmission = {this.handleNewTicketSubmission} />
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