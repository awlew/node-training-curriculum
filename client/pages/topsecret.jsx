import React from 'react';
import * as ReactBS from 'react-bootstrap';
import {Navigation} from 'react-router';

const HomePage = React.createClass({
  mixins : [Navigation],
  componentDidMount() {

    if(window.location.href.indexOf("?userid=1") == -1)
    {
      //router.transitionTo('/');
      this.transitionTo('/');
      console.log(this.context);
    }

  },

  render() {
    return (

      <div>

        <ReactBS.Panel header={<h2>Bank Account</h2>}>
          <p style={{color: 'green'}}>Offshore Account: $4,294,967,296.69</p>
        <p style={{color: 'red'}}>Spending Cash: $9001.75</p>
        </ReactBS.Panel>
        <ReactBS.Panel header={<h2>Tools</h2>}>
          <ReactBS.ListGroup>
            <ReactBS.ListGroupItem> OZ-13MS "Dragoon" - Exoskeleton Armor</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem> GDCB-83F "Falling Crescent" - High Frequency Glaive  </ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem> SBM-3W Mark III Pattern - Wrist Mounted Storm Bolter</ReactBS.ListGroupItem>
            <ReactBS.ListGroupItem> VOLHUD - Exoskeleton Installed HUD and GPS </ReactBS.ListGroupItem>
          </ReactBS.ListGroup>
        </ReactBS.Panel>

        <ReactBS.Button bsStyle="primary" bsSize="large" active>Primary button</ReactBS.Button>
      </div>
    );
  },
});


export default HomePage;
