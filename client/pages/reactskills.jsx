import React from 'react';
import * as ReactBS from 'react-bootstrap';
import { RouteHandler, Link } from 'react-router';

function alertClicked() {
  alert('WARNING: Navigating outside of site!');
}

const SkillsPage = React.createClass({
  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}> React Skills </h2>
        <h3 style={{textAlign: 'left'}} className='hello-world'>
          States - A Short Explanation
        </h3>
        <h4>States are dynamic options/configurations available to a given data structure, component, or page.
            They allow interaction, input, and output based on the implementation. This is through events and delegation;
            an event is any asynchronous occurance that is defined by the source code, or in other words something that was planned
            to change during run time. And a delegate is a handler that calls a function for a subscriber once an event occurs. THus events
            and delegates allow for asynchronous and dynamic interaction between the application and the operator. </h4>

      </div>
    );
  },
});


export default SkillsPage;
