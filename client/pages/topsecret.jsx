import React from 'react';
import * as ReactBS from 'react-bootstrap';

const HomePage = React.createClass({
  render() {
    return (
      <div>
        <h2 className='hello-world'>
          If you see this page you broke something.
        </h2>
        <ReactBS.Button bsStyle="primary" bsSize="large" active>Primary button</ReactBS.Button>
      </div>
    );
  },
});


export default HomePage;
