import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
 ``
import Task from './Task.jsx';
import LoginButton from './LoginButton.jsx';
import { Tasks } from '../api/tasks.js';

import { data } from '../api/services.fixture';

import { BrowserRouter ,Route } from 'react-router-dom';

import ListServices from './pages/ListServices';
import Detail from './pages/Detail';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: data,
    }
  }

  render() {
    
    return (
      <div>
        <h1>App!</h1>
        <BrowserRouter>
        <div>
          <Route path="/" component={(props) => (
            <ListServices services={this.state.services} />
          )}/>
          <Route path="/service/:serviceId" component={props => {
            const serviceId = Number(props.match.params.serviceId);
            return <Detail service={this.state.services[serviceId]}/>;
          }} />

        </div>
        </BrowserRouter>
      </div>
    );
  }
}


