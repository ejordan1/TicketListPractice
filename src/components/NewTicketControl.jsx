// controls new ticket submission/creation
import React from 'react';
import TicketForum from './TicketForum';
import Questions from './Questions';
import Proptype from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.changeButtonState = this.changeButtonState.bind(this)
  }

  changeButtonState() {
    this.setState({ formVisible: true })
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisible) {
      currentlyVisibleContent =
        <TicketForum
         onNewTicketFormSubmission={this.props.onNewTicketFormSubmission}/>;
    } else {
      currentlyVisibleContent = <Questions changeButtonState={this.changeButtonState}
      />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }

}

NewTicketControl.proptype = {
  handleNewTicketFormSubmission : Proptype.func
}

export default NewTicketControl;   
