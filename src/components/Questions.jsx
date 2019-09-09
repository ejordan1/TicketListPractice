import React from 'react';
import Proptype from 'prop-types'

function Questions(props)
{
    return (
        <div>
            <p>what is your favorite color?</p>
            <button onClick = {props.changeButtonState}>Change State</button>
     </div>
    );
}

       
    
    

Questions.proptype = {
    changeButtonState : Proptype.func
}

export default Questions;
//how to get back to new ticket control?