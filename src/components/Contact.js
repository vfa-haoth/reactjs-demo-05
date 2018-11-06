import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAcceptRoute : true
    }
  }

  onClick = (isAcceptRoute) => {
    this.setState({ 
      isAcceptRoute : isAcceptRoute
    })
  }

  render() {
    var { isAcceptRoute } = this.state;
    return (
      <div>
          Contact
          <br/>
          <button type="button" className="btn btn-primary" onClick={()=>this.onClick(false)}>Accept</button>
          <button type="button" className="btn btn-danger" onClick={()=>this.onClick(true)}>Deny</button>
          <Prompt 
            when={isAcceptRoute}
            message={ location => (`Are you sure you want to go to ${location.pathname} ?`) }
          />
      </div>
    );
  }
}

export default Contact;
